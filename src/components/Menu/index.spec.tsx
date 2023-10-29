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
  { label: 'Sobre Mim', url: '/about' },
  { label: 'Blog', url: '/blog' }
]

describe('', () => {
  test.each(links)('Check if Menu has %s link.', (link) => {
    render(<Menu />)
    const linkDom = screen.getByText(link.label)

    expect(linkDom).toHaveAttribute('href', link.url)
  })
})
