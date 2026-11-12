import { useState } from 'react'
import { NextSeo } from 'next-seo'

import BookCard from '@/components/BookCard'
import Pagination from '@/components/Pagination'
import { BOOK_CATEGORIES, books, getTotalPages, paginate } from '@/lib/books'
import { BookCategory } from '@/types/book'

type Filter = BookCategory | 'Todos'

const filters: Filter[] = ['Todos', ...BOOK_CATEGORIES]

const BooksPage = () => {
  const [filter, setFilter] = useState<Filter>('Todos')
  const [page, setPage] = useState(1)

  const filteredBooks =
    filter === 'Todos' ? books : books.filter((b) => b.category === filter)
  const totalPages = getTotalPages(filteredBooks.length)
  const visibleBooks = paginate(filteredBooks, page)

  const handleFilter = (value: Filter) => {
    setFilter(value)
    setPage(1)
  }

  const handlePageChange = (value: number) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <NextSeo
        title="Livros que indico - edupaivadev"
        description="Livros de finanças, política, sociedade e tecnologia que li e recomendo."
      />
      <section className="layout mb-40">
        <h1 className="text-3xl font-bold sm:mt-20 sm:text-5xl">
          Livros que indico
        </h1>
        <h2 className="mt-5 text-xl">
          Finanças, Brasil, política e tecnologia. Livros que li e que me
          fizeram pensar diferente.
        </h2>

        <div className="mt-8 flex flex-wrap gap-2" aria-label="filtros">
          {filters.map((value) => (
            <button
              type="button"
              key={value}
              onClick={() => handleFilter(value)}
              aria-pressed={filter === value}
              className={`border-2 border-brand px-3 py-1 text-sm font-bold transition-colors ${
                filter === value ? 'bg-red' : 'hover:bg-red/30'
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
          {visibleBooks.map((book) => (
            <li key={book.slug}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <p className="mt-16 text-sm italic opacity-80">
          Como associado da Amazon, recebo uma pequena comissão por compras
          feitas pelos links desta página, sem custo extra pra você.
        </p>
      </section>
      <hr className="layout h-0.5 border-none bg-red" />
    </>
  )
}

export default BooksPage
