import Image from 'next/image'
import Link from 'next/link'
import BlogPostItem from 'types/post'

const PostCard = ({
  title,
  thumbnail,
  date,
  categories,
  slug
}: BlogPostItem) => {
  console.log(date)
  return (
    <div className="lg:block">
      <div className="inline-block">{categories}</div>
      <div className="inline-block">{date}</div>
      <figure className="relative">
        <Link href={`/blog/${slug}`}>
          <a>
            <figcaption className="absolute bottom-3 z-[1]">
              <h3 className="p-3 font-bold uppercase">{title}</h3>
            </figcaption>
            <Image src={thumbnail} width="500" height="275" />
            <div>{categories}</div>
          </a>
        </Link>
      </figure>
    </div>
  )
}

export default PostCard
