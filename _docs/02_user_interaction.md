---
title: Creating Charts
permalink: /docs/user-interaction.html
sections:
    - [Interaction, interaction]
    - [Layout Composition, layout-composition]
    - [Data-Driven Guides, data-driven-guides]
    - [Chart Output, chart-output]
---

In contrast to existing chart creation tools, Charticulator allows you to interactively specify a chart's layout. It automatically places glyphs based on your layout specification. Like other chart creation tools, Charticulator allows you to interactively style individual chart elements such as size, color, font, etc.
In this tutorial, we describe the set of interactions used to create a chart in Charticulator. To see more examples of chart creation with Charticulator, refer to the creation process videos in the gallery as well as our <a href="{{ '/docs/video-tutorials.html' | relativize_url }}">video tutorials</a>. 

On this page, clicking a <img class="el-icon" src="{{ '/images/icons/video-tutorial.svg' | relativize_url }}" style="height: 1.5em; vertical-align: top; filter: opacity(60%);" /> button below will reveal the corresponding tutorial.


<h2 id="interaction">Interaction</h2>

<h3>Adding a Mark (to a Glyph)</h3>
Charticulator supports five types of marks: a Shape, a Symbol, a Line, a Text, and an Image. To add a mark to a glyph, you can drag the desired mark from the *Toolbar* and drop it into the *Glyph Editor*. Charticulator places the new mark at its default position: the center of the glyph. Charticulator also adds a corresponding entry to the *Layers Panel*. ({% include videocallout.html src="/videos/tutorials/tutorial1.mp4" timeRange="0.80,2.90" openTutorial="tutorial1" %})

Charticulator now supports three types of shapes: rectangle, oval, and triangle. You need to select the desired shape **before** adding it to the *Glyph Editor*. 

{% include image.html src="/images/docs/marks.png" alt="Marks and Symbols" width="200px" center="1" %}

To place the mark at a specific location, you can click the mark to activate it and click or drag within the *Glyph Editor*, depending on the mark type. ({% include videocallout.html src="/videos/tutorials/tutorial3.mp4" timeRange="18.00,21.09" openTutorial="tutorial3" %})

Guides can be added to a glyph from the *Toolbar* via the same interaction. ({% include videocallout.html src="/videos/tutorials/tutorial5.mp4" timeRange="13.00,14.99" openTutorial="tutorial5" %})


<h3>Changing a Symbol</h3>
Charticulator supports seven types of symbols: a circle, a cross, a diamond, a square, a star, a triangle, and a wye. You can change the symbol type **after** you added the symbol mark to the *Glyph Editor*.
{% include image.html src="/images/docs/symbols.png" alt="Makrs and Symbols" width="200px" center="1" %}


<h3>Binding Data</h3>
You can drag a data column from the *Dataset Panel* and drop it into dropzones in the *Glyph Editor*, the *Chart Canvas*, or the *Attributes Panel*. The compatible dropzones will appear (highlighed in blue) once you start dragging a data column. ({% include videocallout.html src="/videos/tutorials/tutorial2.mp4" timeRange="2.90,5.20" openTutorial="tutorial2" %})

{% include image.html src="/images/docs/dropzones.png" alt="Dropzones" width="400px" center="true" %}

You can also select the data column from data binding popup panels in the *Attributes Panel*. ({% include videocallout.html src="/videos/tutorials/tutorial5.mp4" timeRange="47.60,50.65" openTutorial="tutorial5" %})


<h3>Text Formatting</h3>

Charticulator provides simple formatting for the text attribute. For example, when you bind a numerical variable (called `Share`) to the text attribute of a text mark, the default text string is "${Share}{.1f}", where {.1f} indicates one number is shown past the decimal point. If you want to add a percentage sign (%) after the `Share` value, you can change the text string to "${Share}{.1f}%".

The dollar symbol ($) is reserved to specify the data column name. Therefore, if you want to include a dollar sign to the string, you need to preprend the backslash symbol (\\). For example, to prepend a dollar sign before the `Price` value with two numbers after the decimal point, the text string should be "\\\$${Price}{.2f}".


<h3>Specifying Constraints</h3>
You can specify the layout relationship between two objects using anchors and/or handles. For example, you can snap elements to the guides, such as the default guides in the *Glyph Editor* and *Chart Canvas*. ({% include videocallout.html src="/videos/tutorials/tutorial5.mp4" timeRange="77.80,81.80" openTutorial="tutorial5" %}) For instance, you can ensure the same gap between a text mark and a rectangle in the *Glyph Editor* by dragging the anchor of the text to the top of the rectangle. Similarly, you can drag a gap handle to adjust the gaps between glyphs in the *Chart Canvas*. ({% include videocallout.html src="/videos/tutorials/tutorial2.mp4" timeRange="22.00,27.00" openTutorial="tutorial2" %})

{% include image.html src="/images/docs/anchors-handles.png" alt="Anchors and Handles" width="400px" center="true" %}


<h3>Creaing a Guide</h3>
You can create your own guides to facilitate the alignment of elements. To create a guide, click the desired guide (horizontal or vertical) in the *Toolbar* to activate it; subsequently clicking on the *Glyph Editor* or *Chart Canvas* will add the new guide.

{% include image.html src="/images/docs/new-guide.png" width="400px" alt="New Guide" center="true" %}


<h3>Creating Links</h3>
To create a link between glyphs, you must specify the shape (i.e., line or band) and connection method from the corresponding panel in the *Toolbar*. ({% include videocallout.html src="/videos/tutorials/tutorial2.mp4" timeRange="27.20,34.00" openTutorial="tutorial2" %})

{% include image.html src="/images/docs/links.png" alt="Links Panel" width="400px" center="true" %}

You can adjust the anchor positions of links directly from the *Chart Canvas*. ({% include videocallout.html src="/videos/tutorials/tutorial3.mp4" timeRange="47.49,50.81" openTutorial="tutorial3" %})


<h3>Configuring Scales</h3>
For attributes that are bound to data, Charticulator uses a scale to determine how the data is mapped to visual properties. Scales have their own attributes, and you can edit their attributes by toggling a scales panel from the *Attributes Panel*. ({% include videocallout.html src="/videos/tutorials/tutorial4.mp4" timeRange="7.21,13.50" openTutorial="tutorial4" %})

{% include image.html src="/images/docs/scale-editor.png" alt="Scale Editor" width="400px" center="true" %}

<h3>Adding a Legend</h3>
Legends visualize the scales used in a chart. Charticulator currently uses a predefined legend for each scale type. You can add a lenged to the chart by clicking on the "Add Legend" button from a scales panel. ({% include videocallout.html src="/videos/tutorials/tutorial4.mp4" timeRange="13.27,14.50" openTutorial="tutorial4" %})

<h3>Data-Driven Visibility</h3>
Charticulator also supports *data-driven visibility*, where the visibility of marks is determined by data values. Clicking on the "Conditioned by" button in the Visibility attribute invokes a popup panel, where you can set a filter. For categorical variables, you can set a filter via a set of checkboxes. ({% include videocallout.html src="/videos/tutorials/tutorial2.mp4" timeRange="49.50,57.00" openTutorial="tutorial2" %}) 

{% include image.html src="/images/docs/cond-visibility-cat.png" alt="Conditional Visibility for Categorical Variables" width="400px" center="true" %}

For numberical variables, you can specify a simple boolean query (e.g., Count > 0).
{% include image.html src="/images/docs/cond-visibility-num.png" alt="Conditional Visibility for Numerical Variables" width="400px" center="true" %}


<h2 id="layout-composition">Layout Composition</h2>

By default, a chart begins with a rectangular plot segment and a Cartesian coordinate system. A plot segment has two independent layout directions, each of which can be assigned as a scaffold, a categorical axis, or a numerical axis.
- A scaffold stacks glyphs sequentially within the plot segment
- A categorical axis groups glyphs according to a categorical attribute, grouping them evenly along the axis ({% include videocallout.html src="/videos/tutorials/tutorial4.mp4" timeRange="18.49,26.89" openTutorial="tutorial4" %})
- A numerical axis positions glyphs according to their numerical values ({% include videocallout.html src="/videos/tutorials/tutorial6.mp4" timeRange="3.40,11.02" openTutorial="tutorial6" %})

The diagram below shows the possible layouts produced from combining scaffolds and axes.
{% include image.html src="/images/docs/layout-composition.png" alt="Layout Composition" %}

<h3>Sub-layouts</h3>
For categorical axes, Charticulator employs sub-layouts to determine a within-group layout. Charticulator currently supports four types of sub-layouts: horizontal stacking, vertical stacking, grid, and circle-packing. ({% include videocallout.html src="/videos/tutorials/tutorial4.mp4" timeRange="26.89,30.90" openTutorial="tutorial4" %})

{% include image.html src="/images/docs/sublayouts.png" alt="Plot Sublayouts" width="400px" center="true" %}

<h3>Coordinate Systems</h3>

Charticulator suppors three coordinate systems: Cartesian, Polar, and Custom curve. Charticulator morphs mark shapes in the two non-Cartesian systems, and its morphing maintains a precise data binding because the morphing is performed in vector graphics. For example, a rectangle becomes a wedge shape in a polor coordinate system and a custom curve coordinate system. ({% include videocallout.html src="/videos/tutorials/tutorial1.mp4" timeRange="4.00,7.03" openTutorial="tutorial1" %})

{% include image.html src="/images/docs/coordinate-systems.png" alt="Three Coordinate Systems" width="450px" center="true" %}


<h2 id="data-driven-guides">Data-Driven Guides</h2>

A <a href="http://ddg.namwkim.org/" target="_blank">data-driven guide</a> provides data-driven anchor points from data columns sharing the same numerical unit (e.g., min and max temperature values). A Data-driven guide can be displayed as an axis, though to avoid duplicated axes, Charticulator shows only the first instance. To learn more about data-driven guides, please refer to <a href="http://ddg.namwkim.org/" target="_blank">the work of Kim et al (2016)</a>. ({% include videocallout.html src="/videos/tutorials/tutorial5.mp4" timeRange="0.00,8.09" openTutorial="tutorial5" %})

Glyph elements can be snapped to these anchor points by adding layout constraints (e.g., placing the circle mark at the anchor point of the “Avg. Temperature” data column). ({% include videocallout.html src="/videos/tutorials/tutorial5.mp4" timeRange="35.07,45.09" openTutorial="tutorial5" %})


<h2 id="chart-output">Chart Output</h2>

You can export chart designs as images in PNG and SVG format.

{% include image.html src="/images/docs/export-image.png" alt="Export as Image" %}

You can save chart designs to the 'My Charts' list. Please note that your data and your charts **remains local** in your browser. 

{% include image.html src="/images/docs/save-chart.png" alt="Save to My Charts" width="500px" center="1" %}

You can open the saved chart from the 'My Charts' list. Click the Open icon from the main toolbar to see the 'My Charts' list.

{% include image.html src="/images/docs/open-chart.png" alt="Save to My Charts" width="500px" center="1" %}
