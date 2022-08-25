# Tranity Project Blog

[![buddy branch](https://app.buddy.works/tranity-project/blog/repository/branch/ayungavis%2Ffix-buddy-error/badge.svg?token=0fdb5689e91e449fc10417849d5c73c0f5a7496b33977b9cbe63aa8bdede5d85 'buddy branch')](https://app.buddy.works/tranity-project/blog/repository/branch/undefined)

A place for developers share their experience with others.

## Installation

```bash
yarn install
```

## Development

First, run the development server:

```bash
yarn start
```

    or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Post

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Currently 7 fields are supported.

```
title (required)
date (required)
tags (required, can be empty array)
lastmod (optional)
draft (optional)
summary (optional)
images (optional, if none provided defaults to socialBanner in siteMetadata config)
authors (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout (optional list which should correspond to the file names in `data/layouts`)
```

Here's an example of a post's frontmatter:

```
---
title: 'Introducing Tranity Project Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Lorem ipsum dolor sit amet'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'ayungavis']
layout: PostLayout
---
```

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.
