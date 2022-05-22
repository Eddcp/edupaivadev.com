import PostList from 'components/PostList'
import BlogPostItem from 'types/post'

/* TODO duplicated code - improve it*/
type Props = {
  posts: BlogPostItem[]
  tags: string[]
}

const HighlightsSection = ({ posts, tags }: Props) => (
  <section className="grid grid-cols-3 gap-2 mt-16 lg:mt-[20rem]">
    <article className="col-span-3 lg:col-span-2">
      <h2 className="text-2xl font-bold uppercase">Destaques</h2>
      <PostList posts={posts} className="grid grid-cols-2 gap-2 mt-4" />
    </article>
    <aside className="hidden lg:block">
      <div className="flex flex-col">
        <div>
          <div className="text-2xl font-bold uppercase">Categorias</div>
        </div>
        <div>
          <div className="text-2xl font-bold uppercase">Tags</div>
          <ul className="flex flex-wrap gap-2 mt-8">
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
