import Link from 'next/link'

const NotFoundPage = () => (
  <>
    <h2>404</h2>
    <p>Uai! Parece que você tentou acessar algo que não existe!</p>
    <Link href="/" passHref>
      <button>De volta ao blog</button>
    </Link>
  </>
)

export default NotFoundPage
