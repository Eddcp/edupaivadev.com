import { fireEvent, render, screen } from '@testing-library/react'

import Pagination from '.'

describe('Pagination', () => {
  it('should not render with a single page', () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={1} onPageChange={jest.fn()} />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('should mark the current page and disable previous on the first page', () => {
    render(
      <Pagination currentPage={1} totalPages={3} onPageChange={jest.fn()} />
    )

    expect(screen.getByLabelText('Página 1')).toHaveAttribute(
      'aria-current',
      'page'
    )
    expect(screen.getByLabelText('Página anterior')).toBeDisabled()
    expect(screen.getByLabelText('Próxima página')).toBeEnabled()
  })

  it('should call onPageChange with the selected page', () => {
    const onPageChange = jest.fn()
    render(
      <Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />
    )

    fireEvent.click(screen.getByLabelText('Página 3'))
    fireEvent.click(screen.getByLabelText('Página anterior'))
    fireEvent.click(screen.getByLabelText('Próxima página'))

    expect(onPageChange).toHaveBeenNthCalledWith(1, 3)
    expect(onPageChange).toHaveBeenNthCalledWith(2, 1)
    expect(onPageChange).toHaveBeenNthCalledWith(3, 3)
  })
})
