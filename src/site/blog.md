---
title: 'Posts'
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 50
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

Sometimes I write stuff.


