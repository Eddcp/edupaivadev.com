import PostList from 'components/PostList'
import BlogPostItem from 'types/post'
import categories from './content'
import { useTranslation } from 'next-i18next'

import CycleSvg from '@/../public/img/categories-icons/quebre-o-ciclo.svg'
import CodeSvg from '@/../public/img/categories-icons/quebre-o-codigo.svg'
import FightSvg from '@/../public/img/categories-icons/quebre-o-padrao.svg'
import RoutineSvg from '@/../public/img/categories-icons/quebre-a-rotina.svg'

/* TODO duplicated code - improve it*/
type Props = {
  posts: BlogPostItem[]
  tags: string[]
}

type Component = {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGPolygonElement>>
}

const components: Component = {
  'quebre-o-ciclo': CycleSvg,
  'quebre-o-codigo': CodeSvg,
  'quebre-o-padrao': FightSvg,
  'quebre-a-rotina': RoutineSvg
}

const MAX_DISPLAY = 4
const HighlightsSection = ({ posts, tags }: Props) => {
  const { t } = useTranslation('common')
  const slicedHighlights = posts.slice(0, MAX_DISPLAY)
  return (
    <section
      id="highlights"
      className="mt-40 grid grid-cols-3 gap-2 lg:mt-[20rem]"
    >
      <article className="col-span-3 lg:col-span-2">
        <h2 className="text-2xl font-bold uppercase">{t('highlights.title')}</h2>
        <PostList
          posts={slicedHighlights}
          className="mt-4 grid grid-cols-2 gap-2"
        />
      </article>
      <aside className="hidden lg:block">
        <div className="flex flex-col">
          <div>
            <div className="text-2xl font-bold uppercase">{t('highlights.categories')}</div>
            <ul className="mt-16 flex flex-wrap gap-6">
              {categories?.map((category, index) => {
                const { name } = category
                const CategorySvg = components[name]
                return (
                  <li key={index} className="font-antarctican uppercase">
                    <figure>
                      <CategorySvg
                        className={`inline-block h-24 w-24 border-2 border-solid border-[#FF0043] fill-current hover:border-neutral hover:fill-neutral`}
                      />
                      <figcaption className="mt-4 max-w-[5rem] break-words text-sm">
                        {category['label']}
                      </figcaption>
                    </figure>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mt-16">
            <div className="text-2xl font-bold uppercase">{t('highlights.tags')}</div>
            <ul className="mt-8 flex w-[80%] flex-wrap gap-2">
              {tags?.map((tag, index) => {
                return (
                  <li
                    className="border border-solid border-[#FF0043] p-2"
                    key={index}
                  >
                    {tag}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default HighlightsSection
