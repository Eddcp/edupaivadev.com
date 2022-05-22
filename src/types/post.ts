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
}

export default BlogPostItem

export type BlogPost = {
  post: BlogPostItem
}
