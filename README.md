Charticulator Website
====

## Build the Website

### Prepare the Build Environment

Ensure that [Ruby](https://www.ruby-lang.org/en/), [Ruby Gems](https://rubygems.org), and [Node.js](https://nodejs.org/en/) are installed. For Windows, have [ImageMagick](https://www.imagemagick.org/script/download.php#windows) installed as well.

The website is written using [Jekyll](https://jekyllrb.com). Install `jekyll` and `bundler`: 

    gem install jekyll bundler

After having `bundler` installed, you can install the local packages and necessary dependencies:

    bundle

To build the tutorial viewer, install necessary nodejs modules in the `tutorials/viewer` folder:

    cd tutorials/viewer
    npm install

### Build

First, we need to build the code for the video tutorial.

    cd tutorials/viewer
    npm run build

This will generate `tutorials/viewer.bundle.js`, which is needed for displaying the video tutorials.

Then, generate the website in the root folder. For a development build, set `cdn_enabled` to `false` in `_config.yml`. For a production build, if you want to use the CDN, set `cdn_enabled` to `true` and configure `cdn_prefix`. Then you may run the following command to generate the website:

    bundle exec jekyll build

The generated website contents will be in the `_site_` folder.

For development, you can run the following command to have Jekyll watch for changes and automatically recompile the website.

    bundle exec jekyll serve -P 4001

Navigate to <http://localhost:4001/index.html> to see the website.

To debug the video tutorials, you can watch for changes too.

    cd tutorials/viewer
    npm run watch

## Where Things Are

Due to the requirements of Jekyll, we need to use multiple folders for the same kind of content. To reduce confusion, here is a list of the roles for each folder in this website.

Gallery:
- `_gallery`: Markdown files that specifies the Gallery section. Each file is a single item in the Gallery.
- `gallery`: This folder contains *only* the index page for the Gallery section.
- `images/gallery`: Image files for the gallery.

Tutorials:
- `_docs`: Markdown files that specify the Getting Started section.
- `_tutorials`: Markdown files that specify the Video Tutorials. Each file is a single tutorial.
- `tutorials`: This folder contains *only* the index page for the Tutorials section.
- `images/tutorials`: Tutorial thumbnail images.
- `videos/tutorials`: Tutorial video files.

Datasets：
- `_data/datasets.yml`: This file specifies the information for all datasets. Datasets are referenced by their `id` from the Gallery and Tutorials.

CSS stylesheets:
- `_sass`: This folders contains the SASS source file (.scss) for the stylesheets. Jekyll will compile them to css files.

Header and footer:
- `_includes`: This folder contains the `<head>`, header, and footer for the website.

Page layouts:
- `_layouts`: This folder contains the layout template files for the website, gallery, and tutorials.



# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
