import { render, screen } from '@testing-library/react'

import BookCard from '.'
import Book from '@/types/book'

const book: Book = {
  slug: 'livro-teste',
  title: 'Livro Teste',
  author: 'Autora Teste',
  category: 'Tecnologia',
  asin: '1234567890',
  description: 'Descrição do livro'
}

describe('BookCard', () => {
  it('should render the book info with affiliate links', () => {
    render(<BookCard book={book} />)

    expect(screen.getAllByText('Autora Teste').length).toBeGreaterThan(0)
    expect(screen.getByText('Descrição do livro')).toBeInTheDocument()

    const link = screen.getByText('Ver na Amazon')
    expect(link).toHaveAttribute(
      'href',
      'https://www.amazon.com.br/dp/1234567890?tag=edupaivadev-20'
    )
    expect(link).toHaveAttribute('rel', 'noopener noreferrer sponsored')
  })

  it('should render a placeholder when the book has no cover', () => {
    render(<BookCard book={book} />)

    expect(screen.getByTestId('book-cover-placeholder')).toBeInTheDocument()
  })

  it('should render the cover image when available', () => {
    render(<BookCard book={{ ...book, cover: '/img/livros/teste.jpg' }} />)

    expect(screen.getByAltText('Capa do livro Livro Teste')).toBeInTheDocument()
    expect(screen.queryByTestId('book-cover-placeholder')).toBeNull()
  })
})
