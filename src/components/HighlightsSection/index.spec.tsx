import { fireEvent, render, screen } from '@testing-library/react'

import HighlightsSection from '.'
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

describe('HighlightsSection', () => {
  it('should render at max 4 posts within the highlights section', async () => {
    await render(<HighlightsSection posts={[]} tags={[]} />)

    const listItems = screen.getAllByRole('listitem')

    expect(listItems).toBeDefined()
    expect(listItems).toHaveLength(4)
  })
})
