import PostCard from 'components/PostCard'
import BlogPostItem from 'types/post'

type Props = {
  posts: BlogPostItem[]
  className: string
}

const PostList = ({ posts, className }: Props) => {
  return (
    <ul className={className}>
      {posts?.map((post, index) => (
        <li key={index}>
          <PostCard
            title={post.title}
            thumbnail={post.thumbnail}
            slug={post.slug}
            date={post.date}
            author={post.author}
            content={post.content}
          />
        </li>
      ))}
    </ul>
  )
}

export default PostList
