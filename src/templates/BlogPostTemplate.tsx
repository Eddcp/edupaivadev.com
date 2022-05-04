import { BlogPost } from 'types/post'

const BlogPostTemplate = ({ post }: BlogPost) => {
  return (
    <article className="markdown">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

export default BlogPostTemplate
