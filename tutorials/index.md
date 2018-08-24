---
layout: page
title: Tutorials
---

<div class="gallery">
    {% for item in site.tutorials %}
    <a class="gallery-item" href="{{ item.url | relativize_url }}">
        <div class="el-image" style="background-image: url({{ item.image | thumbnail_image: '540x360^' | relativize_url }})"></div>
        <span class="el-description">{{ item.description | markdownify }}</span>
    </a>
    {% endfor %}
</div>