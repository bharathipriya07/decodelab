// Simple dataset used by the recommendation demo.
// Each item: name, category, tags (array), description, optional rating (1-5)
window.DATA = (function(){
  const categories = [
    'Technology','AI','Programming','Movies','Music','Books','Travel','Sports','Food','Fashion','Gaming'
  ];

  const items = [
    {name:'Machine Learning Crash Course', category:'AI', tags:['machine learning','tutorial','python','ml'], description:'A concise ML course for practitioners.', rating:4.7},
    {name:'The Pragmatic Programmer', category:'Books', tags:['programming','software','best practices','development'], description:'Classic software engineering book.', rating:4.8},
    {name:'Indie Electronic Playlist', category:'Music', tags:['music','electronic','indie','playlist'], description:'Curated electronic tracks.' , rating:4.2},
    {name:'Deep Learning Cookbook', category:'AI', tags:['deep learning','python','neural networks','pytorch'], description:'Recipes for DL projects.', rating:4.5},
    {name:'Top 10 Sci-Fi Movies', category:'Movies', tags:['movies','sci-fi','top lists','entertainment'], description:'Must-watch science-fiction films.', rating:4.3},
    {name:'Rust for Systems', category:'Programming', tags:['rust','systems','programming','performance'], description:'Systems programming with Rust.', rating:4.4},
    {name:'Backpacking Europe Guide', category:'Travel', tags:['travel','europe','backpacking','guide'], description:'Practical tips for budget travel.' , rating:4.1},
    {name:'Sourdough Basics', category:'Food', tags:['food','baking','sourdough','recipes'], description:'Start baking sourdough at home.' , rating:4.6},
    {name:'Indie Adventure Game', category:'Gaming', tags:['gaming','indie','adventure','puzzle'], description:'Narrative-driven indie game.' , rating:4.0},
    {name:'Street Fashion Lookbook', category:'Fashion', tags:['fashion','style','streetwear','lookbook'], description:'Seasonal streetwear trends.' , rating:3.9},
    {name:'Intro to TypeScript', category:'Programming', tags:['typescript','javascript','programming','web'], description:'Learn TypeScript fundamentals.' , rating:4.6},
    {name:'Fitness Home Workout', category:'Sports', tags:['fitness','workout','home','health'], description:'Bodyweight workout plans.' , rating:4.0},
    {name:'Sustainable Travel Tips', category:'Travel', tags:['travel','sustainability','tips','ecotourism'], description:'Reduce your footprint while traveling.' , rating:4.2},
    {name:'AI Ethics Explained', category:'AI', tags:['ai','ethics','policy','overview'], description:'Overview of ethical AI concerns.' , rating:4.5},
    {name:'Gourmet Vegan Recipes', category:'Food', tags:['food','vegan','recipes','gourmet'], description:'Creative vegan dishes.' , rating:4.4},
    {name:'Blockbuster Action Pack', category:'Movies', tags:['movies','action','blockbuster','entertainment'], description:'High-energy action hits.' , rating:4.1},
    {name:'Jazz Piano Essentials', category:'Music', tags:['music','jazz','piano','tutorial'], description:'Learn jazz piano basics.' , rating:4.3},
    {name:'Graph Algorithms Deep Dive', category:'Programming', tags:['algorithms','graphs','programming','data structures'], description:'Graph theory and algorithms.' , rating:4.7}
  ];

  const popular = [items[1], items[4], items[5], items[10]]; // some defaults

  return {categories, items, popular};
})();
