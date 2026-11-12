export type BookCategory = 'Finanças' | 'Política e Sociedade' | 'Tecnologia'

type Book = {
  slug: string
  title: string
  author: string
  category: BookCategory
  /** ASIN da Amazon. Para livros físicos é o ISBN-10 da edição. */
  asin: string
  /** Caminho em /public. Sem capa, o card mostra um placeholder. */
  cover?: string
  description: string
}

export default Book
