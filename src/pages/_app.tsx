import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js - Boilerplate</title>
        {/* <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" /> */}
        <meta
          name="description"
          content="A Simple project starter to work with Typescript, React, NextJS, Jest, React-testing-library"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
