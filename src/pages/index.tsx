import HighlightsSection from 'components/HighlightsSection'
import HeroSection from 'components/HeroSection'
import { getAllPosts } from 'lib/md-client'
import BlogPostItem from 'types/post'

type Props = {
  allPosts: BlogPostItem[]
}

export default function Home({ allPosts }: Props) {
  return (
    <>
      <HeroSection />
      <HighlightsSection posts={allPosts} />
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'content',
    'thumbnail'
  ])

  return {
    props: { allPosts }
  }
}
