export type PostFrontMatter = {
  title: string
  date: string
  tags: string[]
  category: string
  lastmod?: string
  draft?: boolean
  summary?: string
  images?: string[]
  authors?: string[]
  layout?: string
  slug: string
  fileName: string
}
