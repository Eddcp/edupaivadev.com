import { render, screen } from '@testing-library/react'
import Header from '.'

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

describe('Header', () => {
  it('should render the header with two blog items - mobile and desktop', async () => {
    await render(<Header />)

    const blogListItem = await screen.getAllByText('Blog')
    expect(blogListItem).toHaveLength(2)
  })

  it('should render the logo', async () => {
    await render(<Header />)

    const logoElement = await screen.getByAltText('logo edupaivadev')
    expect(logoElement).toBeDefined()
  })

  it('should render the mobile menu', async () => {
    await render(<Header />)

    const mobileMenuElement = await screen.getByLabelText('mobile-menu')
    expect(mobileMenuElement).toBeDefined()
  })

  it('should render the desktop menu', async () => {
    await render(<Header />)

    const menuElement = await screen.getByLabelText('menu')
    expect(menuElement).toBeDefined()
  })
})
