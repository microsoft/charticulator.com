---
title: Creating Charts
permalink: /docs/user-interaction.html
sections:
  - [Interaction, interaction]
  - [Data-Driven Guides, data-driven-guides]
  - [Layout Composition, layout-composition]
  - [Text Formatting, text-formatting]
---

In contrast to existing chart creation tools, Charticulator allows you to interactively specify a chart's layout. It automatically places glyphs based on your layout specification. Like other chart creation tools, Charticulator allows you to interactively style individual chart elements such as size, color, font, etc.
In this tutorial, we describe the set of interactions used to create a chart in Charticulator. To see more examples of chart creation with Charticulator, refer to the creation process videos in <a href="{{ '/gallery/index.html' | relativize_url }}">the gallery</a> as well as our <a href="{{ '/docs/video-tutorials.html' | relativize_url }}">video tutorials</a>.

On this page, clicking a <img class="el-icon" src="{{ '/images/icons/video-tutorial.svg' | relativize_url }}" style="height: 1.5em; vertical-align: top; filter: opacity(60%);" /> button below will reveal the corresponding tutorial.

<h2 id="interaction">Interaction</h2>

<h3>Adding a Mark (to a Glyph)</h3>
Charticulator supports five types of marks: a Shape, a Symbol, a Line, a Text, and an Image. To add a mark to a glyph, you can drag the desired mark from the *Toolbar* and drop it into the *Glyph Editor*. Charticulator places the new mark at its default position: the center of the glyph. Charticulator also adds a corresponding entry to the *Layers Panel*. ({% include videocallout.html src="/videos/tutorials/tutorial1.mp4" timeRange="0.80,2.90" openTutorial="tutorial1" %})

{% include image.html src="/images/docs/marks-toolbar.png" alt="Marks Toolbar" width="400px" center="1" %}

Charticulator supports three types of shapes: rectangle, oval, and triangle, as well as seven types of symbols: a circle, a cross, a diamond, a square, a star, a triangle, and a wye. You can change the shape type and symbol type from the _Attributes Panel_. ({% include videocallout.html src="/videos/tutorials/tutorial7.mp4" timeRange="20.45,22.09" openTutorial="tutorial7" %})

{% include image.html src="/images/docs/shapes-symbols.png" alt="Shapes" width="700px" center="1" %}

To place a mark at a specific location, you can click the mark to activate it and click or drag within the _Glyph Editor_, depending on the mark type. ({% include videocallout.html src="/videos/tutorials/tutorial3.mp4" timeRange="18.00,21.09" openTutorial="tutorial3" %})

<h3>Binding Data</h3>
You can drag a data column from the *Dataset Panel* and drop it into dropzones in the *Glyph Editor*, the *Chart Canvas*, or the *Attributes Panel*. The compatible dropzones will appear (highlighed in blue) once you start dragging a data column, and then when you move your cursor over a drop target it will be highlighted in orange. ({% include videocallout.html src="/videos/tutorials/tutorial2.mp4" timeRange="2.90,5.20" openTutorial="tutorial2" %})

{% include image.html src="/images/docs/dropzones.png" alt="Dropzones" width="400px" center="true" %}

You can also select the data column from data binding popup panels in the _Attributes Panel_. ({% include videocallout.html src="/videos/tutorials/tutorial9.mp4" timeRange="48.80,50.90" openTutorial="tutorial9" %})

{% include image.html src="/images/docs/bind-data.png" alt="Bind Data" width="250px" center="true" %}

<h3>Specifying Constraints</h3>
You can specify the layout relationship between two objects using anchors and/or handles. For example, you can snap elements to the guides, such as the default guides in the *Glyph Editor* and *Chart Canvas*. ({% include videocallout.html src="/videos/tutorials/tutorial5.mp4" timeRange="77.80,81.80" openTutorial="tutorial5" %}) You can also ensure the same gap between a text mark and a rectangle in the *Glyph Editor* by dragging the anchor of the text to the top of the rectangle. Similarly, you can drag a gap handle to adjust the gaps between glyphs in the *Chart Canvas*. ({% include videocallout.html src="/videos/tutorials/tutorial2.mp4" timeRange="22.00,27.00" openTutorial="tutorial2" %})

{% include image.html src="/images/docs/anchors-handles.png" alt="Anchors and Handles" width="400px" center="true" %}

To reuse a chart design in Power BI, it is crucial to anchor visual elements to appropriate guides (for both directions). For example, each of the four corners for the default plot segment is anchored to the intersection of two default guides. When you add additional plot segment or adjust the existing one, do not forget to anchor their four corners to the intersection of two guides.

<h3>Creating a Guide</h3>
Chariculator has four default guides (Top, Bottom, Left, and Right), which are placed relative to the chart canvas using the Chart's Margin attribute values. Middle and Center guides are in the middle of Top & Bottom and Left & Right, respectively.

You can create your own guides to facilitate the alignment of elements. As a guide needs to be added at a specific location, to create a guide, you first need to click the desired guide (horizontal or vertical) in the _Toolbar_ to activate it and then click on the _Glyph Editor_ or _Chart Canvas_.

{% include image.html src="/images/docs/new-guide.png" width="400px" alt="New Guide" center="true" %}

Your own guide can be placed relative to one of the four default guides. You can change the baseline for each guide and adjust its offset from the baseline.

{% include image.html src="/images/docs/edit-guide.png" width="300px" alt="Edit Guide" center="true" %}

You can create a set of equally-spaced guides using the guide coordinator. Because it needs to be placed along a line, you need to click the guide coordinator from the _Toolbar_ to activate it and then drag within the _Glyph Editor_ or _Chart Canvas_. By default, Charticulator creates two inner guides for three equally-spaced blocks. You can adjust the number of inner guides from the _Attributes_ panel.

{% include image.html src="/images/docs/new-guide-coordinator.png" alt="New Guide Coordinator" center="true" %}

<h3>Creating Links</h3>
To create a link between glyphs, you must specify the shape (i.e., line or band) and connection method from the corresponding panel in the *Toolbar*. ({% include videocallout.html src="/videos/tutorials/tutorial2.mp4" timeRange="27.20,34.00" openTutorial="tutorial2" %})

{% include image.html src="/images/docs/links.png" alt="Links Panel" width="400px" center="true" %}

You can adjust the anchor positions of links directly from the _Chart Canvas_. ({% include videocallout.html src="/videos/tutorials/tutorial3.mp4" timeRange="47.49,50.81" openTutorial="tutorial3" %})

<h3>Scales and Legends</h3>
For attributes that are bound to data, Charticulator uses a scale to determine how the data is mapped to visual properties. Scales are listed in the *Scales Panel* and have their own attributes. You can edit their attributes by toggling a scale view from the *Attributes Panel*. For example, you can change the color mapping for categorical data ({% include videocallout.html src="/videos/tutorials/tutorial4.mp4" timeRange="7.21,13.50" openTutorial="tutorial4" %}) or for numerical data ({% include videocallout.html src="/videos/tutorials/tutorial5.mp4" timeRange="21.40,27.40" openTutorial="tutorial5" %}), and change the range mapping for numeraical data ({% include videocallout.html src="/videos/tutorials/tutorial5.mp4" timeRange="47.91,54.50" openTutorial="tutorial5" %}).

{% include image.html src="/images/docs/scale-editor.png" alt="Scale Editor" width="400px" center="true" %}

For the image field of the icon mark, you can assign an image for each unique data value.

{% include image.html src="/images/docs/image-scale.png" alt="Binding Images with Image Scale" width="500px" center="1" %}

<p>&nbsp;</p>{: style="line-height: 6pt;" }
<h4>Adding a legend</h4>{: style="color: darkblue; line-height: 0pt;" }
Legends visualize the scales used in a chart. Charticulator currently uses a predefined legend for each scale type: color legend for categorical data; color legend for numerical data; and range legend for numerical data. You can add a lenged to the chart by clicking on the "Add Legend" button from a scale view. ({% include videocallout.html src="/videos/tutorials/tutorial4.mp4" timeRange="13.27,14.90" openTutorial="tutorial4" %})

As for categorical data, you can create a scale and a corresponding legend in two ways. As described above, when you bind a data column to a visual property, Charticulator automatically creates a scale using data values from the column and allows you to add its legend to the chart. In addition, you can create a scale and a corresponding legend using data column names: in this case, the legend is automatically added to the canvas. ({% include videocallout.html src="/videos/tutorials/tutorial12.mp4" timeRange="0.55,5.30" openTutorial="tutorial12" %}) You can edit the color mapping by toggling a scale view from the _Attributes Panel_. ({% include videocallout.html src="/videos/tutorials/tutorial12.mp4" timeRange="6.55,16.05" openTutorial="tutorial12" %})

{% include image.html src="/images/docs/legend-column-names.png" alt="Creating a Legend using Column Names" width="700px" center="1" %}

<p>&nbsp;</p>{: style="line-height: 6pt;" }
<h4>(Range) Legend vs. Axis for numerical data</h4>{: style="color: darkblue; line-height: 0pt;" }
When you add a range legend for numerical data, it is positioned along the axis by default, thus looking same as a numerical axis. However, as illustrated below, the legend is for the height (or width) of a glyph while the numerical axis is for the posion of of a glyph.

{% include image.html src="/images/docs/legend-vs-axis.png" alt="Legend vs. Axis" width="600px" center="1" %}

<p>&nbsp;</p>{: style="line-height: 6pt;" }
<h4>Reusing a scale</h4>{: style="color: darkblue; line-height: 0pt;" }
Charticulator enables you to reuse an exising scale. You can drag a scale from the *Scales Panel* and drop it into the target zones in the *Attributes Panel*. In addition, Charticulator tries to resue an exising scale automatically, when appropriate. For example, when you bind a `Country` column to the color of text (after biniding it to the color of the corresponding bar), Charticulator reuses the scale created for the bar's fill color.

{% include image.html src="/images/docs/scale-reuse.png" alt="Scale Reuse" width="700px" center="1" %}

If you want to create a new scale (i.e., prevent the reuse of an existing scale), you need to press the Shift key while you're performing data binding.

{% include image.html src="/images/docs/scale-reuse-vs-new.png" alt="Scale Reuse vs. New" width="400px" center="1" %}

<h3>Data-Driven Visibility</h3>
Charticulator also supports *data-driven visibility*, where the visibility of marks is determined by data values. Clicking on the "Conditioned by" button in the Visibility attribute invokes a popup panel, where you can set a filter. For categorical variables, you can set a filter via a set of checkboxes. ({% include videocallout.html src="/videos/tutorials/tutorial2.mp4" timeRange="49.50,57.00" openTutorial="tutorial2" %})

{% include image.html src="/images/docs/cond-visibility-cat.png" alt="Conditional Visibility for Categorical Variables" width="400px" center="true" %}

For numberical variables, you can specify a simple boolean query (e.g., Count > 0).
{% include image.html src="/images/docs/cond-visibility-num.png" alt="Conditional Visibility for Numerical Variables" width="400px" center="true" %}

<h3>Sorting an Axis</h3>
As Charticulator by default handles the data in the order they appear in the table, the default order of the axes labels is determined by how the data is ordered in the table. Therefore, Charticualtor allows you to chanage the order of the X and Y axes labels. You can either automatically order them by data values or manually reorder them with a drag-and-drop interaction. In addition, you can reverse the current order of the labels, or reset to the default order.

{% include image.html src="/images/docs/axis-sort.png" alt="Axis Sort" width="400px" center="true" %}

<h3>Axis Styling</h3>
You can change the style of an axis, such as the tick color, tick size, font size, and font family from the *Axis Style* view. In addition, you can turn on/off wrapping of axis tick labels by manipulating the Wrap text attribute.

{% include image.html src="/images/docs/word-wrap-off.png" alt="No Word Wrapping" width="500px" center="true" %}

{% include image.html src="/images/docs/word-wrap-on.png" alt="Word Wrapping" width="500px" center="true" %}

<h2 id="data-driven-guides">Data-Driven Guides</h2>

A <a href="http://ddg.namwkim.org/" target="_blank">data-driven guide</a> provides data-driven anchor points from data columns sharing the same numerical unit (e.g., min and max temperature values). ({% include videocallout.html src="/videos/tutorials/tutorial5.mp4" timeRange="0.00,8.09" openTutorial="tutorial5" %}) It can be displayed as an axis, though to avoid duplicated axes, Charticulator shows only the first instance. Glyph elements can be snapped to these anchor points by adding layout constraints (e.g., placing the circle mark at the anchor point of the “Avg. Temperature” data column). ({% include videocallout.html src="/videos/tutorials/tutorial5.mp4" timeRange="35.07,45.09" openTutorial="tutorial5" %})

A glyph can have multiple data-driven guides. For example, a diverging bar chart has the mark for one data column pointing right or up, and the mark for another data column pointing in the opposite direction (i.e., left or down, respectively). You can create a diverging bar chart by adding two data-driven guides, facing each other.

{% include image.html src="/images/docs/data-driven-guides.png" alt="Data-Driven Guides" width="450px" center="true" %}

To learn more about data-driven guides, please refer to <a href="http://ddg.namwkim.org/" target="_blank">the work of Kim et al. (2016)</a>.

<h2 id="layout-composition">Layout Composition</h2>

By default, a chart begins with a rectangular plot segment and a Cartesian coordinate system. A plot segment has two independent layout directions, each of which can be assigned as a scaffold, a categorical axis, or a numerical axis.

- A scaffold stacks glyphs sequentially within the plot segment
- A categorical axis groups glyphs according to a categorical attribute, grouping them evenly along the axis ({% include videocallout.html src="/videos/tutorials/tutorial4.mp4" timeRange="18.49,26.89" openTutorial="tutorial4" %})
- A numerical axis positions glyphs according to their numerical values ({% include videocallout.html src="/videos/tutorials/tutorial6.mp4" timeRange="3.40,11.02" openTutorial="tutorial6" %})

The diagram below shows the possible layouts produced from combining scaffolds and axes.

{% include image.html src="/images/docs/layout-composition.png" alt="Layout Composition" width="600px" center="true" %}

<h3>Sub-layouts</h3>
For categorical axes, Charticulator employs sub-layouts to determine a within-group layout. Charticulator currently supports four types of sub-layouts: horizontal stacking, vertical stacking, grid, and circle-packing. ({% include videocallout.html src="/videos/tutorials/tutorial4.mp4" timeRange="26.89,30.90" openTutorial="tutorial4" %})

{% include image.html src="/images/docs/sublayouts.png" alt="Plot Sublayouts" width="400px" center="true" %}

<h3>Coordinate Systems</h3>
Charticulator suppors three coordinate systems: Cartesian, Polar, and Custom curve. Charticulator morphs mark shapes in the two non-Cartesian systems, and its morphing maintains a precise data binding because the morphing is performed in vector graphics. For example, a rectangle becomes a wedge shape in a polor coordinate system and a custom curve coordinate system. ({% include videocallout.html src="/videos/tutorials/tutorial1.mp4" timeRange="4.00,7.03" openTutorial="tutorial1" %})

{% include image.html src="/images/docs/coordinate-systems.png" alt="Three Coordinate Systems" width="450px" center="true" %}

<h3>Overlaying Plot Segments</h3>
You can create a chart having multiple axes by overlaying plot segments. For example, you can use one plot segment for a bar chart and another plot segment for a line chart. Note that the order in the *Layers panel* matters as it corresponds to the z-order. For example, for a combo chart (combining a bar chart and a line chart), the link for the line chart should be below the plot segment for the bar chart in the list.

{% include image.html src="/images/docs/two-plot-segments-overlay.png" alt="Ovaerlaying Two Plot Segments" %}

<h2 id="text-formatting">Text Formatting</h2>

Charticulator provides simple formatting for the text attribute. When the column name does not contain spaces or special characters, you can refer to a data column using the column name (e.g., `Share`, `Temperature`); otherwise, you need to enclose the column name with the grave symbol <code>`</code> (e.g., <code>`Import Value`</code>, <code>`Avg. Temperature`</code>). Note that the expression is case sensitive.

Charticulator allows you to format the value of an expression with a format specifier, which follows d3's syntax (<a href="https://github.com/d3/d3-format#format">d3-format</a> for numbers and <a href="">d3-time-format</a> for dates). For example, when you bind a numerical variable (called `Mean`) to the text attribute of a text mark, the default text string is `${avg(Mean)}{.1f}`, where `{.1f}` indicates one number is shown past the decimal point. ({% include videocallout.html src="/videos/tutorials/tutorial9.mp4" timeRange="49.00,55.00" openTutorial="tutorial9" %}) When Group by is applied, the data rows come as a list and thus it is necessary to use an aggregation function even if there is only one data row in each group. Charticulator, by default, uses an avg aggregation function in all cases.

Charticulator allows you to use simple arithmetic the expression. For example, if you want to convert the `Temperature` value from Celsius to Fahrenheit, you can change the text string to `${avg(Temperature) * 1.8 + 32}`.

You can combine multiple columns to produce a single text string. Keep in mind that data rows come as a list, so it is necessary to use an aggregation function even if there is only one row. To compute the sum of the two columns, you can use the <code>${avg(`Import Value` + `Export Value`)}</code> text string.

You can also combine data values with a regular string. For example, if you want to add a percentage sign `%` after the `Share` value, you can change the text string to `${avg(Share)}{.1f}%`.
The dollar symbol `$` is reserved to specify the expression. Therefore, if you want to include a dollar sign to the string, you need to prepend the backslash symbol `\`. For example, to prepend a dollar sign before the `Price` value with two numbers after the decimal point, the text string should be `\$${avg(Price)}{.2f}`.

Charticulator currently support two constants --- `E` (=2.718281828…) and `PI` (=3.1415926…) --- as well as common math functions including `floor`, `ceil`, `exp`, `log`, `sin`, `cos`, `tan`, `sqrt`, and `pow`. In addition, it supports common aggregation functions such as `min`, `max`, `sum`, `avg`, `stdev`, `variance`, `median`, and `count`. It also allows you to retrive the first and last value with the `first` and `last` fuction, respectively.

<h3>Formatting Axis Tick Labels</h3>
For the Numerical Axis, you can format the axis tick labels by setting the Tick Format attribute using a similar format specifier. Because you are using the data bounded to the axis, you should not specify a data column name (with a dollar symbol). For example, to show a percentage for a numerical data, the tick format string should be `{.0%}`. If you want to prepend a dollar sign to the tick values with a single number after the decimal point, the tick format string should be `${.1f}`. To show a date in a Month/Day/Year format, the tick format string should be <code>&#123;%m/%d/%Y&#125;</code>.

{% include image.html src="/images/docs/date-tick-format.png" alt="Month/Day/Year tick format" width="600px" center="true" %}
