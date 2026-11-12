import Image from 'next/legacy/image'

import { getAffiliateUrl } from '@/lib/books'
import Book from '@/types/book'

type Props = {
  book: Book
}

const BookCard = ({ book }: Props) => {
  const url = getAffiliateUrl(book.asin)

  return (
    <article className="flex h-full flex-col lg:max-w-[240px]">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        aria-label={`Ver ${book.title} na Amazon`}
        className="block transition-transform hover:-translate-y-1"
      >
        {book.cover ? (
          <Image
            src={book.cover}
            alt={`Capa do livro ${book.title}`}
            width={2}
            height={3}
            layout="responsive"
            objectFit="cover"
          />
        ) : (
          <div
            data-testid="book-cover-placeholder"
            className="flex aspect-[2/3] w-full flex-col justify-end border-l-4 border-brand bg-secondary p-4"
          >
            <span className="text-lg font-bold uppercase">{book.title}</span>
            <span className="mt-2 text-sm">{book.author}</span>
          </div>
        )}
      </a>
      <span className="mt-3 text-xs uppercase text-brand">{book.category}</span>
      <h3 className="mt-1 font-bold">{book.title}</h3>
      <p className="text-sm opacity-80">{book.author}</p>
      <p className="mt-2 flex-1 text-sm">{book.description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-4 inline-block self-start border-2 border-brand px-3 py-1 text-sm font-bold transition-colors hover:bg-red"
      >
        Ver na Amazon
      </a>
    </article>
  )
}

export default BookCard
