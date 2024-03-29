import { BlogPost } from 'types/post'
import { timeToRead } from '@/utils/time'
import useWindowSize from '@/hooks/useWindowSize'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Image from 'next/legacy/image'
import SizeHelper from '@/utils/sizeHelper'

import CycleSvg from '@/../public/img/categories-icons/quebre-o-ciclo.svg'
import CodeSvg from '@/../public/img/categories-icons/quebre-o-codigo.svg'
import FightSvg from '@/../public/img/categories-icons/quebre-o-padrao.svg'
import RoutineSvg from '@/../public/img/categories-icons/quebre-a-rotina.svg'
import { NextSeo } from 'next-seo'

type Component = {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGPolygonElement>>
}

const components: Component = {
  'quebre-o-ciclo': CycleSvg,
  'quebre-o-codigo': CodeSvg,
  'quebre-o-padrao': FightSvg,
  'quebre-a-rotina': RoutineSvg
}

const BlogPostTemplate = ({ post }: BlogPost) => {
  const categoryString = post.categories ? post.categories.toString() : ''
  const svgName = categoryString.replace(/\s/g, '-').replace('ó', 'o')
  const CategorySVG = components[svgName]
  const { width } = useWindowSize()

  return (
    <>
      <NextSeo
        title={`${post.title} - edupaivadev`}
        description={post.content}
        openGraph={{
          url: post.thumbnail,
          title: `${post.title} - edupaivadev`,
          images: [
            {
              url: post.thumbnail
            }
          ]
        }}
      />
      <section className="layout markdown">
        <div className="grid grid-cols-12">
          <article className="col-span-12 mt-10 max-w-[100%] lg:col-span-12">
            <div className="flex justify-between">
              <div>
                {CategorySVG !== undefined ? (
                  <CategorySVG
                    className={`inline-block h-8 w-8 border-2 border-solid border-[#FF0043] fill-current`}
                  />
                ) : (
                  ''
                )}
                <span className="ml-2">{post.categories}</span>
              </div>
              <div>{post.date}</div>
            </div>
            <div className="relative mt-5 w-full">
              <Image
                src={
                  post.featured_image?.src !== undefined
                    ? post.featured_image.src
                    : post.thumbnail
                }
                layout="responsive"
                width={1000}
                height={SizeHelper.isDesktop(width) ? 300 : 500}
                objectFit="cover"
                quality={75}
                alt={post.featured_image?.alt ?? ''}
              />
            </div>
            <section>
              <h1 className="font-bold">{post.title}</h1>
              <div className="mb-5 flex justify-between">
                <span className="font-antarctican text-sm font-bold uppercase lg:text-lg">
                  {post.author ? `por ${post.author}` : ''}
                </span>
                <span className="text-sm lg:text-lg">
                  {timeToRead(post.content)}
                </span>
              </div>
              <hr className="h-0.5 border-none bg-red" />
              <ReactMarkdown
                components={{
                  code({ className, children }) {
                    const language = className?.replace('language-', '')
                    return (
                      <SyntaxHighlighter style={darcula} language={language}>
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    )
                  }
                }}
              >
                {post.content}
              </ReactMarkdown>
              <hr className="h-0.5 border-none bg-red" />
            </section>
          </article>
        </div>
      </section>
    </>
  )
}

export default BlogPostTemplate
