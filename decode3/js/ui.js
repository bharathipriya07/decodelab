// UI glue: render interests, handle interactions, show results
(function(){
  const interestsEl = document.getElementById('interests');
  const categoryFilter = document.getElementById('categoryFilter');
  const resultsList = document.getElementById('resultsList');
  const resultsMeta = document.getElementById('resultsMeta');
  const noMatches = document.getElementById('noMatches');
  const searchInput = document.getElementById('searchInput');
  const sortBy = document.getElementById('sortBy');

  function init(){
    renderInterestOptions(DATA.categories);
    populateCategoryFilter(DATA.categories);
    document.getElementById('recommendBtn').addEventListener('click', onRecommend);
    document.getElementById('resetBtn').addEventListener('click', onReset);
    searchInput.addEventListener('keydown', e=>{ if(e.key==='Enter') onRecommend() });
    renderResults(DATA.popular, 'Popular items');
  }

  function renderInterestOptions(categories){
    interestsEl.innerHTML = '';
    const extras = ['AI','Programming','Technology','Movies','Music','Books','Travel','Sports','Food','Fashion','Gaming'];
    const opts = Utils.unique(categories.concat(extras)).sort();
    opts.forEach(opt=>{
      const id = `chk_${opt.replace(/\s+/g,'_')}`;
      const wrapper = document.createElement('label');
      wrapper.innerHTML = `<input type="checkbox" value="${opt}" id="${id}" /> ${opt}`;
      interestsEl.appendChild(wrapper);
    });
  }

  function populateCategoryFilter(categories){
    categories.forEach(cat=>{ const o=document.createElement('option'); o.value=cat; o.textContent=cat; categoryFilter.appendChild(o) });
  }

  function getSelectedInterests(){
    return Array.from(interestsEl.querySelectorAll('input:checked')).map(i=>i.value);
  }

  function onRecommend(){
    const selected = getSelectedInterests();
    const search = searchInput.value.trim();
    const category = categoryFilter.value;
    const sortedBy = sortBy.value;

    const scored = Engine.recommend({items: DATA.items, selectedInterests: selected, search, category, sortBy: sortedBy});

    if(scored.length === 0){
      resultsList.innerHTML='';
      noMatches.classList.remove('hidden');
      noMatches.textContent = 'No exact matches found. Here are some popular or related categories.';
      renderSuggestions();
      resultsMeta.textContent = '0 results';
      return;
    }

    noMatches.classList.add('hidden');
    renderResults(scored, `${scored.length} result(s)` , selected);
  }

  function renderSuggestions(){
    const alts = Engine.suggestAlternatives(DATA.items);
    resultsList.innerHTML = '';
    alts.forEach(cat=>{
      const card = document.createElement('div'); card.className='card';
      card.innerHTML = `<h3>Explore ${cat}</h3><p class="explain">Popular category suggestion.</p>`;
      resultsList.appendChild(card);
    })
  }

  function renderResults(list, metaText, selected=[]){
    resultsList.innerHTML = '';
    resultsMeta.textContent = metaText;
    list.slice(0,20).forEach(item=>{
      const card = document.createElement('div'); card.className='card';
      const tags = (item.tags||[]).slice(0,5).map(t=>`<span class="tag">${t}</span>`).join(' ');
      const explanation = Engine.explain(item, selected);
      card.innerHTML = `<h3>${item.name}</h3><div class="meta">${item.category} • ${item.rating||'—'}</div><div class="tags">${tags}</div><p class="explain">Score: ${item.score || '—'} — ${explanation}</p>`;
      resultsList.appendChild(card);
    })
  }

  function onReset(){
    Array.from(interestsEl.querySelectorAll('input')).forEach(i=>i.checked=false);
    searchInput.value=''; categoryFilter.value='all'; sortBy.value='relevance';
    renderResults(DATA.popular, 'Popular items');
  }

  // init after DOM
  document.addEventListener('DOMContentLoaded', init);
})();
