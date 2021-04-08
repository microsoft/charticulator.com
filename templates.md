---
layout: page
title: Chart Templates
---

<div class="gallery">
    {% assign templates = site.data.templates %}
    {% for item in templates %}
    <div class="gallery-item">
      <div class="el-image" style="background-image: url({{ item.image | thumbnail_image: '540x360^' | relativize_url }})"></div>
      <div class="el-title">{{ item.title }}</div>
      <div class="el-link">
        <a href="{{ item.path }}"><i class="far fa-file" aria-hidden="true"></i> Template</a>&nbsp;&nbsp;
        <a href="{{ item.data }}"><i class="fas fa-table" aria-hidden="true"></i> Data</a>
      </div>
    </div>
    {% endfor %}
</div>