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
  const [isEnglish, setIsEnglish] = useState<boolean>(false)

  const searchFilter = (array: BlogPostItem[]): BlogPostItem[] => {
    return array.filter((post: BlogPostItem) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const clearSearch = () => setSearch('')

  const filteredPosts = searchFilter(allPosts)
  const englishPosts = filteredPosts.filter((post) =>
    post.slug.startsWith('english-')
  )
  const portuguesePosts = filteredPosts.filter(
    (post) => !post.slug.startsWith('english-')
  )
  const currentPosts = isEnglish ? englishPosts : portuguesePosts

  return (
    <section className="layout">
      <h1 className="text-3xl font-bold sm:mt-20 sm:text-5xl">Blog</h1>
      <h2 className="mt-5 text-xl">
        Pensamentos, ensinamentos e mais algumas coisas.
      </h2>
      {/* TODO Extract to Search Component */}
      <div className="mt-5">
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleSearch}
          className="peer px-2 w-full h-10 bg-transparent rounded-md border focus:border-red-300 focus:outline-none transition-colors"
          placeholder="Search..."
        />
      </div>
      <div className="mt-5">
        <button
          className="px-3 h-10 text-base font-semibold text-white uppercase bg-red hover:bg-rose-700 rounded"
          onClick={() => {
            setIsEnglish((b) => !b)
            clearSearch()
          }}
        >
          Read in {isEnglish ? 'Portuguese' : 'English'}
        </button>
      </div>
      <section className="mb-40">
        <PostList
          posts={currentPosts}
          className="grid grid-cols-3 gap-2 mt-4"
        />
      </section>
      <hr className="h-0.5 bg-red border-none" />
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
