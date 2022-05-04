import PostList from 'components/PostList'
import BlogPostItem from 'types/post'

/* TODO duplicated code - improve it*/
type Props = {
  posts: BlogPostItem[]
}

const HighlightsSection = ({ posts }: Props) => (
  <section className="grid grid-cols-3 gap-1">
    <article className="col-span-3 lg:col-span-2">
      <h2 className="text-2xl font-bold uppercase">Destaques</h2>
      <PostList posts={posts} className="grid grid-cols-2 gap-2 mt-4" />
    </article>
    <div className="hidden lg:block">
      <aside>
        <div className="text-2xl font-bold uppercase">Categorias</div>
        <div className="text-2xl font-bold uppercase">Tags</div>
      </aside>
    </div>
  </section>
)

export default HighlightsSection
