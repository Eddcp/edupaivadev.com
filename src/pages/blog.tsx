import PostList from 'components/PostList'
import { getAllPosts } from 'lib/md-client'
import BlogPostItem from '@/types/post'

type Props = {
  allPosts: BlogPostItem[]
}

const BlogPage = ({ allPosts }: Props) => (
  <section className="layout">
    <h2>Blog</h2>
    <section>
      <PostList posts={allPosts} className="" />
    </section>
  </section>
)

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'categories',
    'content',
    'thumbnail'
  ])

  return {
    props: { allPosts }
  }
}

export default BlogPage
