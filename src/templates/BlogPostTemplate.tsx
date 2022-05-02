import { BlogPost } from 'types/post'

const BlogPostTemplate = ({ post }: BlogPost) => {
  return (
    <article>
      <h2>{post.title}</h2>
    </article>
  )
}

export default BlogPostTemplate
