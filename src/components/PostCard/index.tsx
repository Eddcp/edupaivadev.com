import Image from 'next/image'
import Link from 'next/link'
import BlogPostItem from 'types/post'

const PostCard = ({ title, thumbnail, date, author, slug }: BlogPostItem) => {
  return (
    <div className="lg:block">
      <Link href={`blog/${slug}`}>
        <a>
          <h3>{title}</h3>
          <Image src={thumbnail} width="500" height="275" />
          <div>{date}</div>
          <div>{author}</div>
        </a>
      </Link>
    </div>
  )
}

export default PostCard
