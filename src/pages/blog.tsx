import PostList from 'components/PostList'
import { getAllPosts } from 'lib/md-client'
import BlogPostItem from '@/types/post'

type Props = {
  allPosts: BlogPostItem[]
}

const BlogPage = ({ allPosts }: Props) => (
  <section className="layout">
    <h1 className="text-3xl font-bold sm:mt-20 sm:text-5xl">Blog</h1>
    <h2 className="mt-5 text-xl">
      Pensamentos, ensinamentos e mais algumas coisas.
    </h2>
    <section className="mb-40">
      <PostList posts={allPosts} className="grid grid-cols-3 gap-2 mt-4" />
    </section>
    <hr className="h-0.5 bg-red border-none" />
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
