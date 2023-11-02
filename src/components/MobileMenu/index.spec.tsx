import { fireEvent, render, screen } from '@testing-library/react'

import MobileMenu from '.'
import React from 'react'

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

describe('MobileMenu', () => {
  test.each(links)('Check if Menu has %s link.', (link) => {
    render(<MobileMenu />)
    const linkDom = screen.getByText(link.label)

    expect(linkDom).toHaveAttribute('href', link.url)
  })

  it('should render only the mobile menu', async () => {
    await render(<MobileMenu />)

    const mobileMenu = screen.getByLabelText('mobile-menu')
    const desktopMenu = screen.queryByLabelText('menu')

    expect(mobileMenu).toBeDefined()
    expect(desktopMenu).toBeNull()
  })

  it('should have translate-x-full class when button was not clicked', async () => {
    await render(<MobileMenu />)

    const mobileMenu = screen.getByLabelText('mobile-menu')

    expect(mobileMenu).toBeDefined()
    expect(mobileMenu).toHaveAttribute(
      'class',
      expect.stringContaining('translate-x-full')
    )
  })

  it('should toggle nav', async () => {
    await render(<MobileMenu />)

    const mobileMenu = screen.getByLabelText('mobile-menu')
    const buttonElement = screen.getByLabelText('Toggle Menu')

    fireEvent.click(buttonElement)

    expect(mobileMenu).toHaveAttribute(
      'class',
      expect.stringContaining('translate-x-0')
    )

    expect(mobileMenu).toBeDefined()
  })
})
