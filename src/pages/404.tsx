import Link from 'next/link'

const NotFoundPage = () => (
  <>
    <section className="layout sm:h-[calc(100vh_-_25rem)]">
      <h2>404</h2>
      <p>Uai! Parece que você tentou acessar algo que não existe!</p>
      <Link href="/" passHref>
        <button>De volta ao blog</button>
      </Link>
    </section>
  </>
)

export default NotFoundPage
