import Image from 'next/image'
import Link from 'next/link'
import BlogPostItem from 'types/post'

const PostCard = ({
  title,
  thumbnail,
  date,
  categories,
  slug,
  icon
}: BlogPostItem) => {
  const CategorySvg = icon
  return (
    <div className="lg:block">
      <div className="flex justify-between">
        <div>
          {CategorySvg !== undefined ? (
            <CategorySvg
              className={`border-[#FF0043] border-solid border-2 inline-block fill-current h-8 w-8`}
            />
          ) : (
            ''
          )}
          <span className="ml-2">{categories}</span>
        </div>
        <div>{date}</div>
      </div>

      <figure className="relative mt-2">
        <Link href={`/blog/${slug}`}>
          <a>
            <div className="gradient">
              <figcaption className="absolute bottom-3 z-20">
                <h3 className="p-3 font-bold uppercase">{title}</h3>
              </figcaption>
              <Image
                src={thumbnail}
                className="gradient__img"
                width="500"
                height="275"
              />
            </div>
          </a>
        </Link>
      </figure>
    </div>
  )
}

export default PostCard
