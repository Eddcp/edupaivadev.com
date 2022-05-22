import PostCard from 'components/PostCard'
import BlogPostItem from 'types/post'

import CycleSvg from '@/../public/img/categories-icons/quebre-o-ciclo.svg'
import CodeSvg from '@/../public/img/categories-icons/quebre-o-codigo.svg'

type Props = {
  posts: BlogPostItem[]
  className: string
}

type Component = {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGPolygonElement>>
}

const components: Component = {
  'quebre-o-ciclo': CycleSvg,
  'quebre-o-codigo': CodeSvg
}

const PostList = ({ posts, className }: Props) => {
  return (
    <ol className={className}>
      {posts?.map((post, index) => {
        const categoryString = post.categories ? post.categories.toString() : ''
        const svgName = categoryString
          .replace(/\s/g, '-')
          .replace('código', 'codigo')
        const CategorySVG = components[svgName]
        return (
          <li className="col-span-3 my-2 mr-4 sm:col-span-1" key={index}>
            <PostCard
              title={post.title}
              thumbnail={post.thumbnail}
              slug={post.slug}
              date={post.date}
              author={post.author}
              content={post.content}
              categories={post.categories}
              icon={CategorySVG}
            />
          </li>
        )
      })}
    </ol>
  )
}

export default PostList
