import { BlogPost } from 'types/post'

const BlogPostTemplate = ({ post }: BlogPost) => {
  return (
    <article className="prose">
      <h2>{post.title}</h2>
      {post.content}
    </article>
  )
}

export default BlogPostTemplate
