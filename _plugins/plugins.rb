require 'pathname'
require 'base64'
require 'json'
require 'mini_magick'

$build_timestamp = Time.now.to_i.to_s

module Enumerable
  def stable_sort
    each_with_index.sort { |(x, i), (y, j)|
      r = yield(x, y)
      r == 0 ? i <=> j : r
    }.map(&:first)
  end
end

module Jekyll
  module MyLiquidFilters
    # Correctly convert a object to json. Jekyll's json filter seems to produce ruby-like syntax
    def json(object)
      object.reject {|k,v| k == "collections" }.to_json
    end

    # Convert a path to CDN url if CDN is enabled in the website
    def cdn_url(path)
      if @context.registers[:site].config["cdn_enabled"]
        URI.join(@context.registers[:site].config["cdn_prefix"], Pathname(path).relative_path_from(Pathname("/")).to_s).to_s
      else
        relativize_url(path)
      end
    end

    def timestamped_url(url)
        url + "?v=" + $build_timestamp
    end

    # Generate a thumbnail image from a given image, spec is specified in ImageMagick's syntax
    def thumbnail_image(url, spec = nil)
      # Assume the output directory is _site
      input_filename = '.' + url
      out_url = Pathname(url).sub_ext("." + spec.gsub(/[^0-9a-z]/i, '') + ".jpg").to_s
      output_filename = '_site' + out_url
      site = @context.registers[:site]
      rel_output_filename = Pathname(output_filename).relative_path_from(Pathname("_site")).to_s
      site.config["keep_files"] << rel_output_filename unless site.config['keep_files'].include?(rel_output_filename)
      if !File.exists?(output_filename) || File.mtime(output_filename) <= File.mtime(input_filename)
        puts("Generate Thumbnail: " + input_filename)
        FileUtils.mkdir_p(Pathname(output_filename).dirname.to_s)
        image = MiniMagick::Image.open(input_filename)
        image.strip
        image.resize spec
        image.write output_filename
      end
      # puts spec
      out_url
    end

    # Make an absolute url relative. This helps making the site functional at any subpath
    def relativize_url(url)
      pageUrl = @context.registers[:page]["url"]
      if pageUrl.end_with? "/"
        pageUrl = pageUrl + "index.html"
      end
      pageDir = Pathname(pageUrl).parent
      Pathname(url).relative_path_from(pageDir).to_s
    end

    # A liquid filter to stable sort an array with a given property
    def stable_sort(input, property = nil)
      ary = [input].flatten
      ary.stable_sort do |a, b|
        a = a[property]
        b = b[property]
        if a && b
          a <=> b
        else
          a == b ? 0 : a ? -1 : 1
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::MyLiquidFilters)
