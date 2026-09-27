# Bennington Area Makers website

Jekyll site for [bamvt.com](https://www.bamvt.com).

## Local preview

```sh
bundle install
bundle exec jekyll serve --port 4002
```

Open http://localhost:4002. This uses a separate port from the robotics site on 4001.

Run `bundle exec jekyll build` to check changes before publishing.

## Layout and theme

`_layouts/default.html` adapts the sidebar, reading area, mobile menu, and footer navigation from the sister robotics site. Page content lives in the root Markdown files.

The layout's CSS variables define a charcoal (`#1a1a18`) and sunflower yellow (`#f2c230`) theme on warm paper (`#fcfbf7`). Yellow marks navigation, buttons, and section rules; body links use deep ochre (`#765700`) for readable contrast. The mobile navigation remains available when JavaScript is disabled.
