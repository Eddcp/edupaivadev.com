import Footer from 'components/Footer'
import Header from 'components/Header'
import { ReactChild, ReactChildren } from 'react'

interface LayoutProps {
  children: ReactChild | ReactChildren
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="text-neutral">
      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </section>
  )
}

export default Layout
