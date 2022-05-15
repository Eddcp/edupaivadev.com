import PostCard from 'components/PostCard'
import BlogPostItem from 'types/post'

type Props = {
  posts: BlogPostItem[]
  className: string
}

const PostList = ({ posts, className }: Props) => {
  return (
    <ol className={className}>
      {posts?.map((post, index) => (
        <li className="col-span-2 sm:col-span-1" key={index}>
          <PostCard
            title={post.title}
            thumbnail={post.thumbnail}
            slug={post.slug}
            date={post.date}
            author={post.author}
            content={post.content}
            categories={post.categories}
          />
        </li>
      ))}
    </ol>
  )
}

export default PostList
