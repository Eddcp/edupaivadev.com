import Image from 'next/legacy/image'
import Link from 'next/link'
import BlogPostItem from 'types/post'

const PostCard = ({
  title,
  thumbnail,
  date,
  categories,
  slug,
  icon,
  featured_image
}: BlogPostItem) => {
  const CategorySvg = icon
  return (
    <div className="lg:block">
      <div className="flex justify-between">
        <div>
          {CategorySvg !== undefined ? (
            <CategorySvg
              className={`inline-block h-8 w-8 border-2 border-solid border-[#FF0043] fill-current`}
            />
          ) : (
            ''
          )}
          <span className="ml-2">{categories}</span>
        </div>
        <div>{date}</div>
      </div>

      <figure className="relative mt-2">
        <Link legacyBehavior href={`/blog/${slug}`}>
          <a>
            <div className="gradient">
              <figcaption className="absolute bottom-3 z-20">
                <h3 className="p-3 font-bold uppercase">{title}</h3>
              </figcaption>
              <Image
                src={featured_image ? featured_image.src : thumbnail}
                className="gradient__img"
                width="500"
                height="275"
                alt={featured_image ? featured_image.alt : 'imagem do post'}
              />
            </div>
          </a>
        </Link>
      </figure>
    </div>
  )
}

export default PostCard
