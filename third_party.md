---
layout: page
title: Third Party Notices
---

<!--- The full list is located in _data/THIRD_PARTY.yml --->

{% for item in site.data.THIRD_PARTY %}

<h3>{{ item.name }}</h3>
<p>Version: {{ item.version }}, Author: {{ item.authors }}</p>
<p><a href="{{ item.url }}">{{ item.url }}</a></p>
<pre>{{item.license}}</pre>

{% endfor %}