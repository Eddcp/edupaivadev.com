import HighlightsSection from 'components/HighlightsSection'
import HeroSection from 'components/HeroSection'
import { getAllPosts } from 'lib/md-client'
import BlogPostItem from 'types/post'
import TechSection from '@/components/TechSection'

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
      <TechSection />
      <section className="bg-secondary">
        <figure className="relative w-full">
          <div className="absolute top-[50%] left-[50%] text-center translate-x-[-50%] translate-y-[-50%] sm:text-3xl lg:text-4xl">
            informação <span className="font-bold">disruptiva</span> e{' '}
            <span className="font-bold">formativa</span>
          </div>
          <img
            src="/img/coder/newsletter-software-engineer.png"
            alt="Homem preto com moletom e vestindo capuz desenvolvendo código"
            width={'100%'}
          />
        </figure>
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
