type FeatureImage = {
  src: string
  title: string
  alt: string
}

type BlogPostItem = {
  slug: string
  title: string
  content: string
  date: string
  author: string
  thumbnail: string
  categories: string
  icon?: React.FunctionComponent<React.SVGProps<SVGPolygonElement>>
  tags?: string[]
  featured_image?: FeatureImage
}

export default BlogPostItem

export type BlogPost = {
  post: BlogPostItem
}
