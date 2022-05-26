import HighlightsSection from 'components/HighlightsSection'
import HeroSection from 'components/HeroSection'
import { getAllPosts } from 'lib/md-client'
import BlogPostItem from 'types/post'
import TechSection from '@/components/TechSection'
import { getAllTags } from '@/lib/tags'
import { NextSeo } from 'next-seo'

type Props = {
  allPosts: BlogPostItem[]
  allTags: string[]
}

export default function Home({ allPosts, allTags }: Props) {
  return (
    <>
      <NextSeo
        title="Home - edupaivadev"
        description="Desenvolvimento pessoal, profissional e financeiro pelo engenheiro de software Eduardo Paiva"
        canonical="https://edupaivadev.com"
        openGraph={{
          url: 'https://edupaivadev.com',
          images: [
            {
              url: 'https://www.edupaivadev.com/img/edupaivadev3d.jpg',
              width: 1080,
              height: 1080,
              alt: 'logo 3d'
            }
          ],
          site_name: 'edupaivadev'
        }}
      />
      <div className="layout">
        <HeroSection />
        <HighlightsSection posts={allPosts} tags={allTags} />
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
    'categories',
    'thumbnail',
    'featured_image'
  ])

  const allTags = getAllTags()
  return {
    props: { allPosts, allTags }
  }
}
