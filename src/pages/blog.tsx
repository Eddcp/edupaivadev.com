import Link from 'next/link'

const BlogPage = () => (
  <>
    <h2>Blog</h2>
    <p>teste</p>
    <Link href="/" passHref>
      <button>De volta ao blog</button>
    </Link>
  </>
)

export default BlogPage
