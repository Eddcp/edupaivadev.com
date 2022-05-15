type BlogPostItem = {
  slug: string
  title: string
  content: string
  date: string
  author: string
  thumbnail: string
  categories?: string[]
}

export default BlogPostItem

export type BlogPost = {
  post: BlogPostItem
}
