# Tranity Project Blog

[![buddy pipeline](https://app.buddy.works/tranityproject/blog/pipelines/pipeline/367691/badge.svg?token=2605710387551f1c6dc285fb6f3131cc8cf8aefc971bcd06e02065b3a333024a 'buddy pipeline')](https://app.buddy.works/tranityproject/blog/pipelines/pipeline/367691)

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
