import PostList from 'components/PostList'
import { getAllPosts } from 'lib/md-client'
import BlogPostItem from '@/types/post'
import { useState } from 'react'

type Props = {
  allPosts: BlogPostItem[]
}

/*
mt-4 w-full rounded-md dark:bg-dark border border-gray-300 dark:border-gray-600
focus:border-primary-300 focus:outline-none focus:ring-0 dark:focus:border-primary-300
*/
const BlogPage = ({ allPosts }: Props) => {
  const [search, setSearch] = useState<string>('')

  const searchFilter = (array: BlogPostItem[]): BlogPostItem[] => {
    return array.filter((post: BlogPostItem) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const filteredPosts = searchFilter(allPosts)

  return (
    <section className="layout">
      <h1 className="text-3xl font-bold sm:mt-20 sm:text-5xl">Blog</h1>
      <h2 className="mt-5 text-xl">
        Pensamentos, ensinamentos e mais algumas coisas.
      </h2>
      <div className="mt-5">
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleSearch}
          className="peer h-10 w-full rounded-md border bg-transparent px-2 transition-colors focus:border-red-300 focus:outline-none"
          placeholder="Search..."
        />
      </div>
      <section className="mb-40">
        <PostList
          posts={filteredPosts}
          className="mt-4 grid grid-cols-3 gap-2"
        />
      </section>
      <hr className="h-0.5 border-none bg-red" />
    </section>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'categories',
    'content',
    'thumbnail',
    'feature_image'
  ])

  return {
    props: { allPosts }
  }
}

export default BlogPage
