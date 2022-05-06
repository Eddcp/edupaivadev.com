import HighlightsSection from 'components/HighlightsSection'
import HeroSection from 'components/HeroSection'
import { getAllPosts } from 'lib/md-client'
import BlogPostItem from 'types/post'
import Image from 'next/image'

type Props = {
  allPosts: BlogPostItem[]
}

export default function Home({ allPosts }: Props) {
  return (
    <>
      <div className="layout">
        <HeroSection />
        <HighlightsSection posts={allPosts} />
      </div>
      <section className="relative bg-secondary">
        <Image
          src="/img/coder/newsletter-software-engineer.png"
          alt="Homem preto com moletom e vestindo capuz desenvolvendo código"
          layout={'fill'}
          objectFit={'contain'}
        />
      </section>
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
