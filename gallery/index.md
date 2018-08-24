---
layout: page
title: Gallery
permlink: gallery/index.html
---

<div class="gallery">
    {% assign gallery_ordered = site.gallery | stable_sort: "order" %}
    {% for item in gallery_ordered %}
    <a class="gallery-item" href="{{ item.url | relativize_url }}">
        <div class="el-image" style="background-image: url({{ item.image | thumbnail_image: '540x360^' | relativize_url }})"></div>
        <span class="el-description">{{ item.description | markdownify }}</span>
    </a>
    {% endfor %}
</div>