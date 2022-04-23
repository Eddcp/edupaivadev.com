import Header from 'components/Header'
import { ReactChild, ReactChildren } from 'react'

interface LayoutProps {
  children: ReactChild | ReactChildren
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section>
      <Header />
      <main>{children}</main>
    </section>
  )
}

export default Layout
