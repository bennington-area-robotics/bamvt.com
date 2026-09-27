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

## WordPress migration

The homepage presents robotics as BAM’s active program. Earlier makerspace material remains available as history, including the original homepage at `/archive/original-home/`.

The migration preserves 41 published content records (11 pages, one article, 18 events, six venues, and five organizers), 49 attachment pages, and all 425 recovered media files, including image sizes and the garden-workshop PDF. All 59 URLs from the old sitemaps resolve to a page or redirect. The original media bytes and paths are retained.

- Edit current pages in the root Markdown files, historical events in `_events/`, and the gardening article in `_posts/`.
- `_data/event_venues.json` and `_data/event_organizers.json` supply event details. Two organizer names that already appeared in a public event remain credited; their draft pages were not published.
- `_data/migration.json` maps the 90 original content/media records to their current pages; `_data/media_files.json` records file sizes and SHA-256 hashes.
- Category, tag, author, venue, organizer, and attachment pages retain their WordPress paths. `/how-you-can-help/` redirects to `/get-involved/`. The former event slug `/event/3-23-2020-personal-cybersecurity/` redirects to `/event/personal-cybersecurity/`. The small script in `assets/js/legacy-links.js` resolves known WordPress ID query links; those query links require JavaScript on static hosting.
- Videos remain YouTube embeds. Historical registration forms and other external services remain links, with historical notices on the archive pages.

The owner confirmed the seven suspect maker-themed articles were fabricated. They and all other trashed posts remain excluded. SQL, XML, drafts, revisions, and private audit/recovery files stay under the ignored and build-excluded `resources/` directory. No WordPress theme or plugin code is imported.

Verification covers retained prose, original sitemap paths, internal links, media hashes, image decoding, PDF active-content checks, and browser rendering. Five camera JPEGs have valid primary images but missing secondary-frame data in the recovered files; they are preserved unchanged. This covers the supplied exports and known media references, not unknown files from the hosting account. Embedded videos and third-party resources are not offline backups.

Legacy URL coverage is verified for the exported public records, recovered media, old sitemaps, and stored prior slugs. Redirect pages use Jekyll’s HTML redirects, not server-level HTTP 301 responses. Arbitrary calendar views, feeds, date archives, and undocumented historical paths are not exhaustively mapped; hosting access logs or an older URL inventory would be needed to audit those. Spam paths intentionally have no redirects.
