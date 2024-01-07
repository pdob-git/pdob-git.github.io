# Jekflix Template

![Jekflix Template Cover Image](https://res.cloudinary.com/dm7h7e8xj/image/upload/v1505354182/jekflix-logo_mfngps.png)

See the [demo here](https://jekflix.rossener.com/).

## What is it?

A theme for Jekyll inspired by Netflix panel for who loves movies and series and would like to have a blog with this cool appearance.

![Jekflix Screenshot Image](https://res.cloudinary.com/dm7h7e8xj/image/upload/v1566390829/jekflix-screenshot-2_zfiog2.jpg)

## Features

- [Live Search](template_docs/docs/features.md#live-search)
- [Estimated Reading Time](template_docs/docs/features.md#estimated-reading-time)
- [Reading Progress Bar](template_docs/docs/features.md#reading-progress-bar) *(optional)*
- ["New Post" tag](template_docs/docs/features.md#new-post-tag)
- [Load images on demand](template_docs/docs/features.md#load-images-on-demand)
- [Push Menu](template_docs/docs/features.md#push-menu)
- [SVG icons](template_docs/docs/features.md#svg-icons)
- [Shell script to create posts](template_docs/docs/features.md#shell-script-to-create-posts)
- [Tags page](template_docs/docs/features.md#tags-page)
- [About page](template_docs/docs/features.md#about-page)
- [Contact page](template_docs/docs/features.md#contact-page)
- [404 error page](template_docs/docs/features.md#404-error-page)
- [Feed RSS](template_docs/docs/features.md#feed-rss)
- [Disqus](template_docs/docs/features.md#disqus) *(optional)*
- [Featured post](template_docs/docs/features.md#featured-post) *(optional)*
- [Home page pagination](template_docs/docs/features.md#home-page-pagination) *(optional)*
- [Posts sidebar](template_docs/docs/features.md#posts-sidebar) *(optional)*
- [Paginated posts](template_docs/docs/features.md#paginated-posts) *(optional)*
- ["Before you go" modal](template_docs/docs/features.md#before-you-go-modal) *(optional)*
- [Post recommendation](template_docs/docs/features.md#post-recommendation)
- [Netlify CMS ready](template_docs/docs/features.md#netlify-cms-ready)
- [Translations](template_docs/docs/setup.md#translations) **new!**
- [Math Expressions](template_docs/docs/features.md#math-expressions) *(optional)* **new!**

## SEO

- Google Analytics
- Meta tags
- JSON-LD
- Sitemap.xml
- Social Media ready

## Quick Install

In the case you're installing to existing Jekyll project, add this line to your project's `Gemfile`:

```
gem "jekflix"
```

Add this line to your project's `_config.yml`:

```
theme: jekflix
```

And then run:

```
$ bundle
```

Or install it yourself as:

```
$ gem install jekflix
```

### Theme Colors

Create the file `/assets/css/styles.scss` and add:

```
---
---

$themeColor: #ff0a16;
$primaryDark: #141414;
$accentDark: #ffffff;
$lightGray: #f2f2f2;
$texts: #333333;

@import "jekflix";
```

Modify the variables above to change your theme colors.

### Site configuration

Below are some properties you can change in your project `_config.yml`, check the [documentation](template_docs/docs/settings.md#settings) for more details.

```
# Site Settings
name: Jekflix
title: Jekflix | A blog theme for Jekyll
description: Jekflix is a template for Jekyll inspired by Netflix and made by Thiago Rossener.
tags:
  - blog
  - template
  - jekyll
  - theme
  - netlify
email: youremail@xyz.com
disqus_username: disqus_username
show_hero: true
menu:
  - title: Home
    url: /
  - title: About
    url: /about
  - title: Contact
    url: /contact
  - title: Feed
    url: /feed.xml

# Social Media Settings
# Remove the item if you don't need it
github_username: github_username
facebook_username: facebook_username
twitter_username: twitter_username
instagram_username: instagram_username
linkedin_username: linkedin_username
medium_username: medium_username

# Posts Settings
show_time_bar: true
show_modal_on_exit: false
show_modal_on_finish_post: true
two_columns_layout: true

# Advanced Settings
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site
google_analytics: "UA-XXXXXXXX-X"
language: "en"
categories_folder: category
sent_message_url: "/contact/message-sent/"

# Build settings
markdown: kramdown
highlighter: rouge
permalink: /:title/
collections:
  authors:
    output: true
paginate_path: "/page/:num/"
show_get_theme_btn: true
use_logo: false

# Content paginator
paginate_content:
  enabled: true
  debug: false
  collections:
    - posts
  auto: false
  separator: "--page-break--"
  permalink: "/:num/"
  seo_canonical: true
  properties:
    part:
      is_generated: true
    last:
      is_generated: true
    single:
      is_generated: true

# SASS
sass:
  style: compressed

# Plugins
plugins:
  - jekyll-paginate
  - jekyll-paginate-content
```

## Setup

In the case you're cloning this repo, follow those instructions:

- [Environment](template_docs/docs/setup.md#environment)
- [Installing template](template_docs/docs/setup.md#installing-template)
- [Running local](template_docs/docs/setup.md#running-local)

### Customization

See the [settings documentation](template_docs/docs/settings.md#settings) to customize layout, titles, social media and more.

### Theme

You can easily change the theme colors by changing the file `src/yml/theme.yml`, then running `gulp build` in your terminal.

#### GitHub pages

It's a known issue that you can't run Gulp when deploying the website into GitHub pages. So, you must change the theme colors and run `gulp build` locally, then push the changes into your repo, there is no other way.

To see how your website is going to look like when you deploy it, run `bundle exec jekyll serve` locally and access `http://127.0.0.1:4000/`.

## Posts

Use the [Front Matter properties](template_docs/docs/post.md#front-matter-properties) to create posts.

> **Note:** In the case you're cloning this repo, you can use the available [script](template_docs/docs/post.md#creating-a-post) to generate posts automatically.

## Questions?

File a [GitHub issue](https://github.com/thiagorossener/jekflix-template/issues/new) please.

## Author

[Thiago Rossener](https://rossener.com/)

Do you like my work? Buy me a coffee!

<a href="https://www.buymeacoffee.com/thiagorossener" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## License

*Jekflix Template* is available under the MIT license. See the [LICENSE](https://github.com/thiagorossener/jekflix-template/blob/master/LICENSE) file for more info.
