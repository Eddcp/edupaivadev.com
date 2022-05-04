import Layout from 'components/Layout'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/markdown.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>edupaivadev</title>
        {/* <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" /> */}
        <meta
          name="description"
          content="Desenvolvimento pessoal, profissional e financeiro pelo engenheiro de software Eduardo PAiva"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
