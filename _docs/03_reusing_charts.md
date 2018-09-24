---
title: Reusing Charts
permalink: /docs/reusing-charts.html
sections:
    - [Chart Output, chart-output]
    - [Nested Chart, nested-chart]
    - [Power BI Custom Visual, power-bi]
---


<h2 id="chart-output">Chart Output</h2>

You can use your chart design in four ways: (1) save it in the 'My Charts' list within Charticulator, (2) export it as an image file, (3) export it as a Charticulator template, and (4) export it as Power BI custom visual (.pbiviz).

<h3>Save As</h3>
You can save a chart design to the 'My Charts' list. Please note that your data and your chart designs **remain local** in your browser. 

{% include image.html src="/images/docs/save-chart.png" alt="Save to My Charts" width="500px" center="1" %}

To open a saved chart from the 'My Charts' list, clicking 'Open' in the main toolbar will reveal the 'My Charts' list.

{% include image.html src="/images/docs/open-chart.png" alt="Save to My Charts" width="500px" center="1" %}


<h3>Export as Image</h3>
You can export chart designs as images in PNG and SVG format.

{% include image.html src="/images/docs/export.png" alt="Export as Image" width="500px" center="1" %}


<h3>Charticulator Template</h3>
You can also export chart designs as a Charticulator Template, which can subsequently be loaded as a chart compoent to create a nested chart. When you click the "Charticulator Template" button at the bottom of the form, a template file is created in JSON format. ({% include videocallout.html src="/videos/tutorials/tutorial7.mp4" timeRange="64.67,80.00" openTutorial="tutorial7" %})

{% include image.html src="/images/docs/export-CT.png" alt="Export as Image" width="500px" center="1" %}


<h3>Power BI Custom Visual</h3>
Finally, you can export chart designs as Power BI custom visuals (.pbiviz), which can be imported into Power BI. ({% include videocallout.html src="/videos/tutorials/tutorial8.mp4" timeRange="0.00,16.00" openTutorial="tutorial8" %}) Note that **not all** chart designs created in Charticulator produce valid custom visuals that can be imported into Power BI.

{% include image.html src="/images/docs/export-PBI-CV.png" alt="Export as Power BI Custom Visual" width="500px" center="1" %}


<h2 id="nested-chart">Nested Chart</h2>
Charticulator allows you to create <a href="https://en.wikipedia.org/wiki/Small_multiple">small multiples</a>, a series of similar graphs or charts using the same scale and axes, by using a nested chart.

To begin, select the "Group by" field of the Plot Segment before adding the Nested Chart compenent to the *Glyph Editor*. For example, if you want to create a small multiples comprised of 12 months of Boston Weather, choose the "month" from the `DATE` data column. Once the Group By is applied, the guides layout within the *Glyph Editor* is updated accordingly. 

{% include image.html src="/images/docs/groupby.png" alt="Group by" width="500px" center="1" %}

To add a nested chart component to a glyph, drag it from the *Toolbar* and drop it on the *Glyph Editor*. Once a nested chart is added, you can edit it directly or import a Charticulator Template. Because a small multiple typically needs more space than a single chart, it is recommended to increase the chart size before editing the nested chart.

{% include image.html src="/images/docs/nested-chart.png" alt="Nested Chart" center=true width="250px" width="500px" center="1" %}

When you click on the "Edit Nested Chart..." button, another instance of Chaticulator will open in a new browser tab. Since the nested chart usually does not require a margin as large as a regular chart, it is recommended to decrease the margins of the chart prior to editing the glyph; the margin between nested charts can be adjusted in the main instance of Charticulator.

Unlike the main Charticulator instance, the header in the new instance of Charticulator will include a "Save Nested Chart" button. Whenever you click this button, the main instance will be automatically updated.

{% include image.html src="/images/docs/nested-chart-header.png" alt="Nested Chart" center=true width="400px" %}

You can switch back and forth between the main Charticualtor instance and the instance for the nested chart.


<h2 id="power-bi">Power BI Custom Visual</h2>

When you export the chart design as a Power BI Custom Visual, you can import the resulting .pbiviz file into Power BI. Once its requird data fields are filled in Power BI, you can see the chart within Power BI. ({% include videocallout.html src="/videos/tutorials/tutorial8.mp4" timeRange="32.87,48.00" openTutorial="tutorial8" %}) In addition, the chart will react to events from other charts or slicers in your Power BI dashboard. For example, you can create a slicer using the Month value of `DATE` so that you can interactively select which month to be shown. ({% include videocallout.html src="/videos/tutorials/tutorial8.mp4" timeRange="52.70,61.00" openTutorial="tutorial8" %})

{% include image.html src="/images/docs/power-bi.png" alt="Power BI" width="500px" center="1" %}
