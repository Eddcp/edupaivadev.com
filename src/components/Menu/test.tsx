import { render, screen } from '@testing-library/react'

import Menu from '.'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: ''
    }
  }
}))

const links = [
  { label: 'Home', url: '/' },
  { label: 'Afiliados', url: '/afiliate' },
  { label: 'Sobre Mim', url: '/about' },
  { label: 'Posts', url: '/posts' }
]

describe('', () => {
  test.each(links)('Check if Menu have %s link.', (link) => {
    render(<Menu />)
    const linkDom = screen.getByText(link.label)

    expect(linkDom).toHaveAttribute('href', link.url)
  })
})
