import BlogPostTemplate from 'templates/BlogPostTemplate'
import { getPostBySlug, getAllPosts } from 'lib/md-client'
import BlogPostItem from 'types/post'
import markdownToHtml from 'lib/markdownToHtml'

type Params = {
  params: {
    slug: string
  }
}

const Post = (post: BlogPostItem) => {
  return <BlogPostTemplate post={post} />
}

export default Post

export async function getStaticProps({ params }: Params) {
  const slug = params.slug
  const post = await getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content'
  ])
  const content = await markdownToHtml(post?.content || '')

  return {
    props: {
      ...post,
      content
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post?.slug
        }
      }
    }),
    fallback: false
  }
}
