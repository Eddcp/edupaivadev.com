import Layout from 'components/Layout'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'
const isProduction = process.env.NODE_ENV === 'production'

import Head from 'next/head'
import '@/styles/globals.css'
import '@/styles/markdown.css'
import NextNProgress from 'nextjs-progressbar'
import Analytics from '@/components/Analytics'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProduction) gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>edupaivadev</title>
        <link rel="shortcut icon" href="/img/avatar-meta-icon.png" />
        <link rel="apple-touch-icon" href="/img/avatar-meta-icon.png" />
        <meta
          name="description"
          content="Desenvolvimento pessoal, profissional e financeiro pelo engenheiro de software Eduardo PAiva"
        />
      </Head>
      <Analytics />
      <Layout>
        <NextNProgress
          color="#FF0043"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
