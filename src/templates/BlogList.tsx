import { getAllPosts } from 'lib/md-client'

export default function Blog() {
  return <p></p>
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
      title: 'Blog',
      description: 'Posts on software engineering'
    }
  }
}
