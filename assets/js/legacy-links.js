---
layout: null
---
// WordPress ID links have no server-side routing on GitHub Pages.
(function () {
  if (location.pathname !== '/' && location.pathname !== '/index.html') return;
  var ids = {{ site.data.legacy_ids | jsonify }};
  var query = new URLSearchParams(location.search);
  var id = query.get('p') || query.get('page_id') || query.get('attachment_id');
  if (!id || !Object.prototype.hasOwnProperty.call(ids, id)) return;
  query.delete('p');
  query.delete('page_id');
  query.delete('attachment_id');
  query.delete('post_type');
  var remaining = query.toString();
  location.replace(ids[id] + (remaining ? '?' + remaining : '') + location.hash);
})();
