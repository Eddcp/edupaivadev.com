import { BlogPost } from 'types/post'

const BlogPostTemplate = ({ post }: BlogPost) => {
  return (
    <article className="layout markdown">
      <h1 className="text-3xl font-bold sm:text-5xl">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

export default BlogPostTemplate
