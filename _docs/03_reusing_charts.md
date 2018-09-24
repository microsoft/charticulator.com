---
title: Reusing Charts
permalink: /docs/reusing-charts.html
sections:
    - [Chart Output, chart-output]
    - [Nested Chart, nested-chart]
    - [Power BI Custom Visual, power-bi]
---


<h2 id="chart-output">Chart Output</h2>

You can reuse your chart design in four ways: (1) save it in the 'My Charts' list within Charticulator, (2) export it as an image file, (3) export it as a Charticulator template, and (4) export it as Power BI Custom visual.

<h3>Save As</h3>
You can save chart designs to the 'My Charts' list. Please note that your data and your charts **remains local** in your browser. 

{% include image.html src="/images/docs/save-chart.png" alt="Save to My Charts" width="500px" center="1" %}

You can open the saved chart from the 'My Charts' list. Click the Open icon from the main toolbar to see the 'My Charts' list.

{% include image.html src="/images/docs/open-chart.png" alt="Save to My Charts" width="500px" center="1" %}


<h3>Export as Image</h3>
You can export chart designs as images in PNG and SVG format.

{% include image.html src="/images/docs/export.png" alt="Export as Image" %}


<h3>Charticulator Template</h3>
You can export chart designs as a Charticulator Template, which can be loaded as a chart compoent to create the nested chart. Once you click the "Charticulator Template" button at the bottom, a template file is created in JSON format. ({% include videocallout.html src="/videos/tutorials/tutorial7.mp4" timeRange="64.67,80.00" openTutorial="tutorial7" %})

{% include image.html src="/images/docs/export-CT.png" alt="Export as Image" %}


<h3>Power BI Custom Visual</h3>
You can export chart designs as a Power BI Custom Visual (.pbiviz), which can be imported into Power BI. ({% include videocallout.html src="/videos/tutorials/tutorial8.mp4" timeRange="0.00,16.00" openTutorial="tutorial8" %}) Note that **not all** chart designs can be exported as a valid custom visual that can be imported into Power BI.

{% include image.html src="/images/docs/export-PBI-CV.png" alt="Export as Power BI Custom Visual" %}


<h2 id="nested-chart">Nested Chart</h2>
Charticulaor allows you to create a <a href="https://en.wikipedia.org/wiki/Small_multiple">small multiple</a>, a series of similar graphs or charts using the same scale and axes, by using a nested chart (or a chart component).

You first need to select the "Group by" field of the Plot Semgment before adding the Nested Chart compenent to the *Glyph Editor*. For example, if you want to create a small multiples with 12 months of Boston Weather, choose the "month" from the `DATE` data column. Once the group by is applied, the guides layout within the *Glyph Editor* is updated accordingly. 

{% include image.html src="/images/docs/groupby.png" alt="Group by" center=1 width="500px" %}

To add a nested chart component to a glyph, you can drag it from the *Toolbar* and drop it into the *Glyph Editor*. Once a nested chart is added, you can edit it directly or import a Charticulator Template. Because a small multiple typically needs larger space than a single chart, it is a good idea to increase the chart size before editing the nested chart.

{% include image.html src="/images/docs/nested-chart.png" alt="Nested Chart" center=true width="250px" %}

When you click on the "Edit Nested Chart..." button, another Chaticulator will open in a new tab. Because the nested chart usually does not need as large margin as a regular chart, it is a good idea to decrease the margins of the chart before you edit the glyph. (The margin between the nested charts can be adjusted in the main Charticulator.)

Unlike the main Charticulator page, the header will have the "Save Nested Chart" button. Whenever you click this button, the main chart will be automatically updated.

{% include image.html src="/images/docs/nested-chart-header.png" alt="Nested Chart Header" center=true width="400px" %}

You can swtich back and forth between the main Charticualtor and the one for the nested chart.


<h2 id="power-bi">Power BI Custom Visual</h2>

You can import the chart design, exported as a Power BI Custom Visual, into Power BI. Once its requird data fields are filled, you can see the chart within Power BI. ({% include videocallout.html src="/videos/tutorials/tutorial8.mp4" timeRange="32.87,48.00" openTutorial="tutorial8" %}) In addition, the chart reacts to the event from other charts or slicers. For example, you can create a slicer using the Month value of the `DATE` value so that you can interactively choose the desired month to be shown. ({% include videocallout.html src="/videos/tutorials/tutorial8.mp4" timeRange="52.70,61.00" openTutorial="tutorial8" %})

{% include image.html src="/images/docs/power-bi.png" alt="Power BI" %}
