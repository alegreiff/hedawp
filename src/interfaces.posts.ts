export interface OpcionesPage{
  id: number;
  copy: string;
}
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

export interface PageResponse {
  data: Post[]
  start: number
  end: number
  size: number
  total: number
  currentPage: number
  lastPage: number
  url: Url
}

export interface Url {
  current: string
  next: string
  last: string
  prev?: string
}

export interface ListaTags {
  tags: Tags;
}

export interface Tags {
  nodes: Node[];
}

export interface Node {
  name: string;
  slug: string;
}