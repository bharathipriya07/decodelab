# Smart Recommendations Demo

Simple, extensible recommendation system demo using client-side JS.

Usage:

- Open `index.html` in a browser.
- Select interests, optionally search, pick category/sort, then click `Recommend`.

Architecture:

- `js/data.js` — dataset and categories
- `js/utils.js` — normalization and scoring helpers
- `js/engine.js` — recommendation engine (scoring, explaining, suggestions)
- `js/ui.js` — UI rendering and event handling

Extensibility:

- Add more items to `js/data.js` or load CSV/JSON via fetch.
- Replace `Engine.recommend` with more advanced models (content/collab/hybrid).
