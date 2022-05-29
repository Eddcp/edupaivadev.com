import PostList from 'components/PostList'
import BlogPostItem from 'types/post'
import categories from './content'

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

const HighlightsSection = ({ posts, tags }: Props) => (
  <section
    id="highlights"
    className="grid grid-cols-3 gap-2 mt-40 lg:mt-[20rem]"
  >
    <article className="col-span-3 lg:col-span-2">
      <h2 className="text-2xl font-bold uppercase">Destaques</h2>
      <PostList posts={posts} className="grid grid-cols-2 gap-2 mt-4" />
    </article>
    <aside className="hidden lg:block">
      <div className="flex flex-col">
        <div>
          <div className="text-2xl font-bold uppercase">Categorias</div>
          <ul className="flex flex-wrap gap-6 mt-16">
            {categories?.map((category, index) => {
              const { name } = category
              const CategorySvg = components[name]
              return (
                <li key={index} className="font-antarctican uppercase">
                  <figure>
                    <CategorySvg
                      className={`border-[#FF0043] border-solid border-2 inline-block fill-current hover:fill-neutral hover:border-neutral h-24 w-24`}
                    />
                    <figcaption className="mt-4 max-w-[5rem] text-sm break-words">
                      {category['label']}
                    </figcaption>
                  </figure>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mt-16">
          <div className="text-2xl font-bold uppercase">Tags</div>
          <ul className="flex flex-wrap gap-2 mt-8 w-[80%]">
            {tags?.map((tag, index) => {
              return (
                <li
                  className="p-2 border border-[#FF0043] border-solid"
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

export default HighlightsSection
