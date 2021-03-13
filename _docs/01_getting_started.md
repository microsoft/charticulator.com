---
title: Getting Started
permalink: /docs/getting-started.html
sections:
    - [Terminology, terminology]
    - [UI Components, components]
    - [Preparing Data, preparing-data]
    - [Loading Data, loading-data]
---

This page describes four things that you need to learn in order to use Charticulator.

<h2 id="terminology">Terminology</h2>

- A **mark** is a primitive graphical element (e.g., rectangle, line, text).

- A **glyph** is a visual representation of a single data row. A glyph contains one or more **marks**.

- A **guide** is an auxiliary element for positioning marks or glyphs. Guides do not appear in exported charts.

- A **plot segment** lays out a set of glyphs.

- A **scaffold** or an **axis** specifies the layout property of one particular direction in a plot segment. A scaffold specifies a basic stacking layout without data binding and an axis specifies a layout that is bound to properties of the data. An axis can position glyphs according to a categorical data attribute or to a numerical data attribute.

{% include image.html src="/images/docs/term-illustration.png" alt="Terminology illustration" width="70%" center="1" %}


<h2 id="components">User Interface Components</h2>

Charticulator's user interface consists of the following components:

1. **Dataset Panel**: listing the columns in your dataset. Click the "..." button to view the actual data values.

2. **Toolbar**: widgets for specifying Marks, Links, Guides, Plot Segments, and Scaffolds.

3. **Chart Canvas**: a canvas for specifying the chart design.

4. **Glyph Editor**: a canvas for specifying the glyph design.

5. **Layers Panel**: listing the contents of the chart and glyph designs.

6. **Attributes Panel**: widgets for specifying the attributes and data bindings for each layer.

7. **Scales Panel**: listing the scales used in the chart.
   
{% include image.html src="/images/docs/ui-components.png" alt="User interface" %}

You can customize the position, size, and docking status of the *Glyph Editor*, *Layers Panel*, *Attributes Panel*, and *Scales Panel*. Click the dock status icon in the top right corner of each view to toggle its docking status. When the view is undocked, you can change its position and size.

{% include image.html src="/images/docs/floating-panels.png" alt="Floating Panels" center="true" width="500px" %}


<h3>Help Menu</h3>

Click the help icon in the top right corner to reveal links to several resources, including a link to this Getting Started page, the <a href="{{ '/gallery/index.html' | relativize_url }}">Example Gallery</a>, a link to <a href="https://github.com/Microsoft/charticulator/issues/new">create an issue</a> in our Github repository, the <a href="https://charticulator.com">Charticulator main website</a>, and a link to <a href="mailto:charticulator@microsoft.com">contact us</a> via email.

{% include image.html src="/images/docs/help.png" alt="Help Menu" center="true" width="150px" %}



<h2 id="preparing-data">Preparing Data</h2>

Charticulator supports datasets in <a href="https://en.wikipedia.org/wiki/Comma-separated_values">**CSV**</a> format and expects that **the first row contains the column names**. Charticulator is disigned to support both the <a href="https://en.wikipedia.org/wiki/Wide_and_narrow_data">wide and narrow</a> format of a data table. 

<h3>Narrow</h3>
The table below shows (in narrow form) the maket share of mobile operating systems from one year to the next.

<table>
<thead>
<tr><th>Year</th><th>OperatingSystem</th><th>MarketShare</th></tr>
</thead>
<tbody>
<tr><td>2009</td><td>iOS</td><td>59.35</td></tr>
<tr><td>2009</td><td>Android</td><td>5.58</td></tr>
<tr><td>2009</td><td>Symbian</td><td>2.5</td></tr>
<tr><td>2010</td><td>iOS</td><td>40.77</td></tr>
<tr><td>2010</td><td>Android</td><td>16.97</td></tr>
<tr><td>...</td><td>...</td><td>...</td></tr>
</tbody>
</table>


<h3>Wide</h3>
The table below shows (in wide form) the world population by gender and age. Becuase a glyph represents one data row, you need to use a <a href="{{ '/docs/user-interaction.html#data-driven-guides' | relativize_url }}">data-driven guide</a> to position multiple marks based on numerical data values in a glyph.

<table>
<thead>
<tr><th>Age</th><th>Female</th><th>Male</th></tr>
</thead>
<tbody>
<tr><td>0-4</td><td>327.601</td><td>350.321</td></tr>
<tr><td>5-9</td><td>316.714</td><td>338.892</td></tr>
<tr><td>10-14</td><td>301.011</td><td>322.363</td></tr>
<tr><td>15-19</td><td>288.482</td><td>308.333</td></tr>
<tr><td>20-24</td><td>287.820</td><td>306.100</td></tr>
<tr><td>...</td><td>...</td><td>...</td></tr>
</tbody>
</table>


<h3>Data for Links</h3>
To draw charts with the links between glyphs, you will need two data tables: one for nodes/entities and another for links/relationships between nodes. For example, to draw the arc chart below (character co-ocurrence in Les Miserables), you will need one table for the characters and another for their co-occurrences.

{% include image.html src="/images/gallery/les_miserables_linear.png" alt="Les Miserables Chart" %}

Charticulator expects the nodes table to contain an `id` column and the links table to contain `source_id` and `target_id` columns, which refer to the `id`s in the nodes table, as illustrated below. Note that these column names are **case sensitive**.

<table>
<thead>
<tr><th>id</th><th>Name</th><th>Group</th></tr>
</thead>
<tbody>
<tr><td>Myriel</td><td>Myriel</td><td>G01</td></tr>
<tr><td>Napoleon</td><td>Napoleon</td><td>G01</td></tr>
<tr><td>Valjean</td><td>Valjean</td><td>G02</td></tr>
<tr><td>Marguerite</td><td>Marguerite</td><td>G03</td></tr>
<tr><td>...</td><td>...</td><td>...</td></tr>
</tbody>
</table>

<table>
<thead>
<tr><th>source_id</th><th>target_id</th><th>Strength</th></tr>
</thead>
<tbody>
<tr><td>Napoleon</td><td>Myriel</td><td>1</td></tr>
<tr><td>Valjean</td><td>Myriel</td><td>5</td></tr>
<tr><td>Marguerite</td><td>Valjean</td><td>1</td></tr>
<tr><td>...</td><td>...</td><td>...</td></tr>
</tbody>
</table>


<h2 id="loading-data">Loading Data</h2>

When you launch Charticulator, it automatically invokes the "New" chart command. Because you need to load data in order to create a chart, the New chart panel lets you select data files. You can click the button or drag a CSV file into the button area to open the data file. 

{% include image.html src="/images/docs/import-data.png" alt="Import Data" %}

Once you choose the data file, Charticulator previews its top five rows.

{% include image.html src="/images/docs/import-data-preview.png" alt="Import Data Preview" %}

Now you are ready to <a href="{{ '/docs/user-interaction.html' | relativize_url }}">create a chart with Charticulator</a> and follow along with our <a href="{{ '/docs/video-tutorials.html' | relativize_url }}">video tutorials</a>.
Also note that many of the charts in our <a href="{{ '/gallery/index.html' | relativize_url }}">gallery</a> have an associated video of their creation process.
