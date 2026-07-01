const Utils = (function(){
  function normalize(str){
    return (str||'').toString().toLowerCase().trim();
  }

  function unique(arr){ return Array.from(new Set(arr)); }

  function intersect(a,b){
    const set = new Set(b.map(normalize));
    return a.filter(x=>set.has(normalize(x)));
  }

  function scoreMatch(itemTags, selectedTags){
    const it = itemTags.map(normalize);
    const sel = selectedTags.map(normalize);
    const common = intersect(it, sel).length;
    // score base: ratio of matched tags, boosted by number of matches
    const ratio = common / Math.max(it.length, 1);
    return +(ratio * 100 + common * 5).toFixed(2);
  }

  return {normalize, unique, intersect, scoreMatch};
})();
