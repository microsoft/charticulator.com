---
title: Video Tutorials
permalink: /docs/video-tutorials.html
---

Follow along with these step-by-step tutorials as you learn how to use Charticulator.

<div class="gallery">
    {% assign tutorials_ordered = site.tutorials | stable_sort: "order" %}
    {% for item in tutorials_ordered %} 
    <a class="gallery-item" href="{{ item.url | relativize_url }}">
        <div class="el-image" style="background-image: url({{ item.image | thumbnail_image: '540x360^' | relativize_url }})"></div>
        <span class="el-description">{{ item.description | markdownify }}</span>
    </a>
    {% endfor %}
</div>

Also note that many of the charts in our <a href="{{ '/gallery/index.html' | relativize_url }}">gallery</a> have an associated video of their creation process.