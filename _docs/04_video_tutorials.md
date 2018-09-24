---
title: Video Tutorials
permalink: /docs/video-tutorials.html
---

Follow along with these step-by-step tutorials as you learn how to use Charticulator.

<div class="gallery">
    {% for item in site.tutorials %}
    <a class="gallery-item" href="{{ item.url | relativize_url }}">
        <div class="el-image" style="background-image: url({{ item.image | thumbnail_image: '540x360^' | relativize_url }})"></div>
        <span class="el-description">{{ item.description | markdownify }}</span>
    </a>
    {% endfor %}
</div>

Also note that each chart in our <a href="{{ '/gallery/index.html' | relativize_url }}">gallery</a> has an associated video of its creation process.