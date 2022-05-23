import { BlogPost } from 'types/post'
import { timeToRead } from '@/utils/time'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Image from 'next/image'

import CycleSvg from '@/../public/img/categories-icons/quebre-o-ciclo.svg'
import CodeSvg from '@/../public/img/categories-icons/quebre-o-codigo.svg'
import FightSvg from '@/../public/img/categories-icons/quebre-o-padrao.svg'
import RoutineSvg from '@/../public/img/categories-icons/quebre-a-rotina.svg'

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
  return (
    <section className="layout markdown">
      <div className="grid grid-cols-12">
        <article className="col-span-12 mt-10 max-w-[100%] lg:col-span-8">
          <div className="flex justify-between">
            <div>
              {CategorySVG !== undefined ? (
                <CategorySVG
                  className={`border-[#FF0043] border-solid border-2 inline-block fill-current h-8 w-8`}
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
              src={post.thumbnail}
              layout="responsive"
              width={1000}
              height={600}
              objectFit="cover"
              quality={75}
            />
          </div>
          <section>
            <h1 className="font-bold">{post.title}</h1>
            <div className="flex justify-between mb-5">
              <span className="font-antarctican text-sm font-bold uppercase lg:text-lg">
                {post.author ? `por ${post.author}` : ''}
              </span>
              <span className="text-sm lg:text-lg">
                {timeToRead(post.content)}
              </span>
            </div>
            <hr className="h-0.5 bg-red border-none" />
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
            <hr className="h-0.5 bg-red border-none" />
          </section>
        </article>
      </div>
    </section>
  )
}

export default BlogPostTemplate
