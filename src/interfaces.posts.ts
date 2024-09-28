export interface Post {
  slug: string
  date: string
  title: string
  excerpt: string
  featuredImage?: FeaturedImage
  content?: string
}

export interface FeaturedImage {
  node: ImgSrc
}

export interface ImgSrc {
  sourceUrl: string
}