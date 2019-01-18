---
description: "Character Co-occurrence in Les Misearbles"
image: "/images/tutorials/tutorial3.png"
order: 3
tutorial:
  videoSource:
    mp4: "../videos/tutorials/tutorial3.mp4"

  duration: 59.07

  captions:
    - section: |
        # Dataset & Chart

        The characters and co-occurrence connections in _Les Misérables_.

        In this tutorial, we create a linear arc diagram displaying the characters and their connections.

    - section: |
        # Create the Glyph

        Create a glyph containing a rectangle mark and a text mark.

    - timeBegin: 0.00
      timeEnd: 4.38
      text: |
        Add a rectangle mark to the glyph

    - timeBegin: 4.38
      timeEnd: 8.28
      text: |
        Set the `Height` to 15, overriding the automatic height

    - timeBegin: 8.28
      timeEnd: 13.39
      text: |
        Map `Group` to `Fill`

    - timeBegin: 13.39
      timeEnd: 21.09
      text: |
        Add a text mark to the glyph, anchoring it at the bottom of the rectangle

    - timeBegin: 21.09
      timeEnd: 26.89
      text: |
        Rotate and move the text to place it at the bottom of the rectangle

    - timeBegin: 26.89
      timeEnd: 32.70
      text: |
        Map `Name` to `Text` and `Group` to `Color`

    - timeBegin: 32.70
      timeEnd: 36.00
      text: |
        Make the text smaller to avoid overlap

    - timeBegin: 36.00
      timeEnd: 38.83
      text: |
        Adjust the bottom margin of the chart to accommodate the text

    - section: |
        # Create the Arcs

        Draw arc links between the glyphs according to the link data.

    - timeBegin: 38.83
      timeEnd: 47.49
      text: |
        Create "Line" style links between glyphs, connecting them using the Link Data table

    - timeBegin: 47.49
      timeEnd: 50.81
      text: |
        Change the link anchors so that the arcs emanate from the top of the glyphs

    - timeBegin: 50.81
      timeEnd: 59.07
      text: |
        Adjust the opacity of the links

    # - section: |
    #     # Modify the Glyph

    #     Add text to show the temperature values.

    # - timeBegin: 48.26
    #   timeEnd: 64.41
    #   text: |
    #     Add a text mark to the center of the glyph;
    #     Anchor the text to center, and set font size to 10.

    # - timeBegin: 64.41
    #   timeEnd: 71.08
    #   text: |
    #     Map `Temperature` to `Text`.

    # - timeBegin: 71.08
    #   timeEnd: 89.86
    #   text: |
    #     Map `City` to `Visibility`;
    #     Here we show only the Beijing ones.

    # - section: |
    #     # Link the Cities with Bands

    #     Learn how to use the Link tool.

    # - timeBegin: 90.09
    #   timeEnd: 100.44
    #   text: |
    #     Open the `Link` tool from the toolbar. Link using `Band`, and link by `City`.
    #     This creates bands that connect through each city.

    # - section: |
    #     # Order the Glyphs for each Month

    #     Learn how to sort glyphs.

    # - timeBegin: 101.37
    #   timeEnd: 112.57
    #   text: |
    #     Select the `PlotSegment` and select `Temperature` as the order;
    #     Restore the order back to original by selecting `(default order)`.

---