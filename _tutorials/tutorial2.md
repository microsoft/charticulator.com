---
description: "Mobile OS Market Share"
image: "/images/tutorials/tutorial2.png"
order: 2
tutorial:
  videoSource:
    mp4: "../videos/tutorials/tutorial2.mp4"

  duration: 74.00

  captions:
    - section: |
        # Dataset & Chart

        The market share of mobile operating systems collected from [StatCounter](http://gs.statcounter.com/os-market-share/mobile/worldwide). This dataset has three columns: `Year`, `OperatingSystem`, and `Share`. 

        In this tutorial, we create a variant of a stacked bar chart where bars are ordered by market share values.

        # Create a Bar Chart

    - timeBegin: 0.00
      timeEnd: 2.90
      text: |
        Add a rectangle mark to the glyph

    - timeBegin: 2.90
      timeEnd: 5.20
      text: |
        Map `Share` to `Height`

    - timeBegin: 5.20
      timeEnd: 8.40
      text: |
        Map `OperatingSystem` to `Color`

    - timeBegin: 8.40
      timeEnd: 12.60
      text: |
        Assign `Year` to the X axis

    - section: |
        # Stack the Bars Vertically and Order by Share

    - timeBegin: 12.70
      timeEnd: 17.00
      text: |
        Change the sub-layout to vertical stacking

    - timeBegin: 18.00
      timeEnd: 22.00
      text: |
        Order the bars by `Share`

    - timeBegin: 22.00
      timeEnd: 27.00
      text: |
        Adjust gaps

    - section: |
        # Create Bands to Connect the Bars

    - timeBegin: 27.00
      timeEnd: 34.00
      text: |
        Create the "Band" style links, connecting bars by `OperatingSystem`

    - section: |
        # Add Labels to Indicate Operating Systems

    - timeBegin: 35.00
      timeEnd: 41.00
      text: |
        Add a text mark for the label and move it to the desired position

    - timeBegin: 41.00
      timeEnd: 50.00
      text: |
        Map `OperatingSystem` to the label's `Text` and `Color` attributes

    - timeBegin: 50.00
      timeEnd: 57.30
      text: |
        Show the text mark for the first year only via conditional visibility

    - timeBegin: 57.30
      timeEnd: 60.00
      text: |
        Adjust the left margin of the chart

    - section: |
        # Finalize the Chart

    - timeBegin: 60.00
      timeEnd: 74.00
      text: |
        Edit the chart title
---