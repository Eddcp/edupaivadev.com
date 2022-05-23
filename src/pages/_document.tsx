import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body className="bg-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
