---
title: Reusing Charts
permalink: /docs/reusing-charts.html
sections:
  - [Importing Template, importing-template]
  - [Replacing Dataset, replacing-dataset]
  - [Chart Output, chart-output]
  - [Nested Chart, nested-chart]
---

You can reuse a chart design for differnt datasets either (1) by importing a Charticulator template to the current dataset or (2) by swapping in a new dataset into an existing Charticualtor design session. 

<h2 id="importing-template">Import a Charticulator Template</h2>

Clicking the <img class="el-icon" src="{{ '/images/icons/icons-import-template.svg' | relativize_url }}" style="height: 1.5em; vertical-align: middle; filter: opacity(70%);" /> icon in the toolbar will display a file open dialog so that you can select a template file. If the current dataset has all the data columns used (and thus are required) in the template, having the same column name and data type for every column, Charticulator immediately redraws the chart applying the selected template. 

Otherwise, Charticulator opens the *Map your data* window, asking you to create mappings between the data columns in the current dataset and those used in the template. Once you create all the required mappings, the "Save mapping" button is enabled. For example, a dot plot template created with a mushroom dataset requires three data columns: one for the x-axis (`Odor`), andother for the y-axis (`Surface`), and the third for the color coding (`IsEdible`). For a publication dataset that includes the research area of the paper and the year the paper was published, you can map the x-axis to `Year` and both y-axis and color to `ResearchArea`.

{% include image.html src="/images/docs/map-your-data.png" alt="Map you data" width="500px" center="1" %}

Once you click on the "Save mapping" button, you see the chart generated using the template. 

{% include image.html src="/images/docs/before-edit.png" alt="Before edit" width="500px" center="1" %}

You can edit the chart to achieve your intended chart design, best matching your dataset. For example, you can change a hard-coded text (e.g., title), the axis ordering, and the legend location & orientation.  

{% include image.html src="/images/docs/after-edit.png" alt="After edit" width="546px" center="1" %}


<h2 id="replacing-dataset">Swap in New Dataset</h2>

Clicking the <img class="el-icon" src="{{ '/images/icons/icons-replace.svg' | relativize_url }}" style="height: 1.5em; vertical-align: middle; filter: opacity(70%);" /> icon in the Dataset Panel will display a file open dialog so that you can select a new dataset file. If the new dataset has exactly the same structure --- the same number of columns as well as same column name and data type for every column --- Charticulator immediately redraws the chart once the dataset file is selected. 

Otherwise, Charticulator opens the *Map your data* window to allow you to create mappings between the data columns used in the current design and those in the new dataset.


<h2 id="chart-output">Chart Output</h2>

You can reuse your chart design in six ways: (1) save it in the 'My Charts' list within Charticulator, (2) download it as a chart file, (3) export it as an image file, (4) export it as an HTML file, (5) export it as a Charticulator template, and (6) export it as Power BI Custom visual.

<h3>Save to My Charts</h3>
You can save chart designs to the 'My Charts' list. Please note that your data and your charts **remains local** in your browser unless you download them as a chart file.

{% include image.html src="/images/docs/save-chart.png" alt="Save to My Charts" width="500px" center="1" %}

<h3>Download as Chart</h3>
Once your chart is saved to the 'My Charts' list, you can open the saved chart or download it as a chart file from the list. To open a saved chart, click the <img class="el-icon" src="{{ '/images/icons/icons-open.svg' | relativize_url }}" style="height: 1.5em; vertical-align: top; filter: opacity(60%);" /> icon from the main toolbar to see the 'My Charts' list, and then click the item from the list. To download the saved chart, click the <img class="el-icon" src="{{ '/images/icons/icons-download.svg' | relativize_url }}" style="height: 1.5em; vertical-align: top; filter: opacity(60%);" /> icon at the bottom right corner of the item.

{% include image.html src="/images/docs/open-chart.png" alt="Save to My Charts" width="500px" center="1" %}

You can open the downloaded chart from a different machine. Click the Open Chart button in the Open panel to select the chart file. Please note that a downloaded chart file contains both **data** and chart design.

<h3>Export as Image</h3>
You can export chart designs as images in PNG, JPEG, and SVG format. For the PNG and JPEG formats, you can specify the desired DPI (Dots per inch).

{% include image.html src="/images/docs/export-image.png" alt="Export as Image" %}

<h3> Export as HTML</h3>
You can export chart designs as an HTML file.

{% include image.html src="/images/docs/export-html.png" alt="Export as HTML" %}

<h3>Charticulator Template</h3>
You can export chart designs as a Charticulator Template, which can be (1) emported to apply the chart design or (2) loaded as a chart component to create a nested chart. Once you click the "Charticulator Template" button at the bottom, a template file is created in JSON format. ({% include videocallout.html src="/videos/tutorials/tutorial7.mp4" timeRange="64.67,80.00" openTutorial="tutorial7" %})

{% include image.html src="/images/docs/export-CT.png" alt="Export as Image" %}

<h3>Power BI Custom Visual</h3>
You can export chart designs as a Power BI Custom Visual (.pbiviz) ({% include videocallout.html src="/videos/tutorials/tutorial8.mp4" timeRange="0.00,16.00" openTutorial="tutorial8" %}), which can be imported into Power BI. Check out how you can <a href="{{ '/docs/using-in-power-bi.html' | relativize_url }}">use the chart design in Power BI</a>. 
Note that **not all** chart designs can be exported as a valid custom visual that can be imported into Power BI.


<h2 id="nested-chart">Nested Chart</h2>
Charticulaor allows you to create a <a href="https://en.wikipedia.org/wiki/Small_multiple">small multiple</a>, a series of similar graphs or charts using the same scale and axes, by using a nested chart (or a chart component).

You first need to select the "Group by" field of the Plot Semgment before adding the Nested Chart compenent to the _Glyph Editor_. ({% include videocallout.html src="/videos/tutorials/tutorial11.mp4" timeRange="16.00,19.84" openTutorial="tutorial11" %}) For example, if you want to create a small multiples with 12 months of Boston Weather, choose the "month" from the `DATE` data column. Once the group by is applied, the guides layout within the _Glyph Editor_ is updated accordingly.

{% include image.html src="/images/docs/groupby.png" alt="Group by" center=1 width="500px" %}

To add a nested chart component to a glyph, you can drag it from the _Toolbar_ and drop it into the _Glyph Editor_. ({% include videocallout.html src="/videos/tutorials/tutorial11.mp4" timeRange="21.30,23.80" openTutorial="tutorial11" %}) Once a nested chart is added, you can edit it directly or import a Charticulator Template. ({% include videocallout.html src="/videos/tutorials/tutorial11.mp4" timeRange="24.20,29.70" openTutorial="tutorial11" %}) Because a small multiple typically needs larger space than a single chart, it is a good idea to increase the chart size before editing the nested chart.

{% include image.html src="/images/docs/nested-chart.png" alt="Nested Chart" center=true width="250px" %}

When you click on the "Edit Nested Chart..." button, another Chaticulator will open in a new tab. Because the nested chart usually does not need as large margin as a regular chart, it is a good idea to decrease the margins of the chart before you edit the glyph. (The margin between the nested charts can be adjusted in the main Charticulator.)

Unlike the main Charticulator page, the header will have the "Save Nested Chart" button. Whenever you click this button, the main chart will be automatically updated.

{% include image.html src="/images/docs/nested-chart-header.png" alt="Nested Chart Header" center=true width="400px" %}

You can swtich back and forth between the main Charticualtor and the one for the nested chart.