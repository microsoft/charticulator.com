---
layout: page
title: Gallery
permlink: gallery/index.html
---

## Chart & Video

<div class="gallery">
    {% assign gallery_ordered = site.gallery | stable_sort: "order" %}
    {% for item in gallery_ordered %}
    {% if item.video %}
    <a class="gallery-item" href="{{ item.url | relativize_url }}">
        <div class="el-image" style="background-image: url({{ item.image | thumbnail_image: '540x360^' | relativize_url }})"></div>
        <span class="el-description">{{ item.description | markdownify }}</span>
    </a>
    {% endif %}
    {% endfor %}
</div>

## Chart Only

<div class="gallery">
    {% assign gallery_ordered = site.gallery | stable_sort: "order" %}
    {% for item in gallery_ordered %}
    {% if item.video %}
    {% else %}
    <a class="gallery-item" href="{{ item.url | relativize_url }}">
        <div class="el-image" style="background-image: url({{ item.image | thumbnail_image: '540x360^' | relativize_url }})"></div>
        <span class="el-description">{{ item.description | markdownify }}</span>
    </a>
    {% endif %}
    {% endfor %}
</div>