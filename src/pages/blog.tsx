import PostList from 'components/PostList'
import { getAllPosts } from 'lib/md-client'

const BlogPage = () => (
  <>
    <h2>Blog</h2>
    <section>
      <PostList />
    </section>
  </>
)

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'content'])

  return {
    props: { allPosts }
  }
}

export default BlogPage
