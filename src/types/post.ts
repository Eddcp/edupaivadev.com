export type BlogPostItem = {
  slug: string
  title: string
  wordCount: number
  readingTime: string
  content: string
  date: string
  coverImage: string
}

export type BlogPost = {
  post: BlogPostItem
}
