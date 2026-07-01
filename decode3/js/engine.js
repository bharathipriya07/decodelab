// Recommendation engine: computes match scores, ranks, suggests alternatives
const Engine = (function(){
  function recommend({items, selectedInterests=[], search='', category='all', sortBy='relevance'}){
    const selected = selectedInterests.map(s=>s.toLowerCase());
    const searchTerm = (search||'').toLowerCase().trim();

    // compute score for each item
    const scored = items.map(item=>{
      const tags = (item.tags||[]).map(t=>t.toLowerCase());
      let score = Utils.scoreMatch(tags, selected);

      // small boost if category matches any selected interest
      if(selected.includes(item.category.toLowerCase())) score += 6;

      // search boosting
      if(searchTerm){
        const hay = (item.name + ' ' + item.description + ' ' + (item.tags||[]).join(' ')).toLowerCase();
        if(hay.includes(searchTerm)) score += 12;
      }

      // category filter
      const keepCategory = (category === 'all') || (item.category.toLowerCase() === category.toLowerCase());

      return Object.assign({}, item, {score: +score.toFixed(2), keepCategory});
    }).filter(x=>x.keepCategory);

    // sort
    if(sortBy === 'rating') scored.sort((a,b)=> (b.rating||0) - (a.rating||0));
    else if(sortBy === 'name') scored.sort((a,b)=> a.name.localeCompare(b.name));
    else scored.sort((a,b)=> b.score - a.score || (b.rating||0) - (a.rating||0));

    return scored;
  }

  function explain(item, selectedInterests){
    const itemTags = (item.tags||[]).map(t=>t.toLowerCase());
    const sel = selectedInterests.map(s=>s.toLowerCase());
    const matches = Utils.intersect(itemTags, sel);
    if(matches.length){
      return `Matches tags: ${matches.join(', ')}`;
    }
    if(sel.includes(item.category.toLowerCase())) return `Category matches your interest in ${item.category}`;
    return 'Similar to your interests';
  }

  function suggestAlternatives(items, selectedInterests){
    // suggest top categories from popular items not matched
    const counts = {};
    items.forEach(it=>{ counts[it.category] = (counts[it.category]||0)+1 });
    const sorted = Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(x=>x[0]);
    return sorted.slice(0,3);
  }

  return {recommend, explain, suggestAlternatives};
})();
