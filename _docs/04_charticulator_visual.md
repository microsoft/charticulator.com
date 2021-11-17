---
title: Charticulator Visual
permalink: /docs/charticulator-visual.html
sections:
  - [Importing Visual, import-visual]
  - [Invoking Editor, invoke-editor]
  - [Creating Chart, create-chart]
  - [Exporting Chart, export-chart]
---

With Microsoft Charticulator visual, you can create a wide range of custom chart designs **right within Power BI**. If you are new to Charticulator, first learn the basics from <a href="{{ '/docs/getting-started.html' | relativize_url }}">Getting Started</a>.

<h2 id="import-visual">Import the Charticulator Visual</h2>

<h3>Import from AppSource</h3>
Using the “…” menu from the Visualizations pane, select “Get more visuals.” Within AppSource search for “charticulator” and add the visual to Power BI.

{% include image.html src="/images/docs/get-more-visuals.png" alt="Import the Charituclator visual" center="1" %}

<h3>Import from File</h3>

By default, Power BI loads the latest published version of the visual from AppSource. To use a specific version of Charticulator visual available for download, you need to override the AppSource version with a local file version, by following the instruction from the [Testing submissions of Power BI visuals](https://docs.microsoft.com/en-us/power-bi/developer/visuals/submission-testing) page. 

In Power BI Desktop, Developer mode is **valid for only one session** and the Charticulator visual imported from a local file **lasts only one session**. If you open a new Power BI Desktop instance, you need to you need to import the latest Charticulator visual file again after enabling Developer mode.

A specific version of the Charticulator visual is available at
```` 
https://appsource.powerbi.com/charticulator.charticulator58556A88422D44A99D9BF0052B958F87.[VERSION].0.pbiviz. 
````


<h2 id="invoke-editor">Invoke the Charticultor Visual Editor</h2>

To use the Charticulator visual editor, you need to add the needed data fields to the Data section in the Visualizations Pane. For a chart with links between glyphs, add the link-related data fields to the Links section, after creating a relationship between two tables. See <a href="{{ '/docs/using-in-power-bi.html#chart-with-links' | relativize_url }}">chart with links</a> for more details.

You may need to remove data summarization or specify sorting order. See tips for <a href="{{ '/docs/using-in-power-bi.html' | relativize_url }}">using Charticulator in Power BI</a> for additional help.

{% include image.html src="/images/docs/add-fields.png" alt="Add fields to the Data section" %}

To opedn the Charticulator visual editor, select "Edit" in the visual header.

{% include image.html src="/images/docs/select-edit.png" alt="Select Edit"%}

<h2 id="create-chart">Creating a Chart</h2>

You can create charts either from scratch or using a Charticulator template.

{% include image.html src="/images/docs/create-chart.png" alt="Create a chart" %}

If you choose to build from scratch, you’ll land on the empty canvas to start creating your chart.

{% include image.html src="/images/docs/empty-canvas.png" alt="Empty canvas" %}

If you wish to use an existing Charticulator template, choose “Import template.” Next, browse to where you have your template file stored, and select the file. Then, the Map your data window appears, showing the information (e.g., required data type, example data values) that helps you choose the right data column mapping. 

{% include image.html src="/images/docs/map-data.png" alt="Map your data dialog" %}

After choosing all the appropriate data columns in the dropdown menus, select "Save mapping." Then, you can see Charticulator has generated the chart ready for editing.

{% include image.html src="/images/docs/canvas-for-editing.png" alt="Canvas with the chart for editing" %}

Once you're done editing the chart design, remember to save your chart before navigating back to report.

{% include image.html src="/images/docs/save-chart-pbi.png" alt="Save chart" width="500px" center="1" %}

<h2 id="export-chart">Exporting a Chart</h2>

If you wish to reuse your custom chart design, you can export the chart as a template for later importing. Click export in the top right menu and the template file will be downloaded.

{% include image.html src="/images/docs/export-chart-template-pbi.png" alt="Export chart template" width="500px" center="1" %}