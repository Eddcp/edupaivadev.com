import Book, { BookCategory } from '@/types/book'

export const AMAZON_AFFILIATE_TAG = 'edupaivadev-20'
export const BOOKS_PER_PAGE = 6

export const BOOK_CATEGORIES: BookCategory[] = [
  'Finanças',
  'Política e Sociedade',
  'Tecnologia'
]

export const books: Book[] = [
  {
    slug: 'o-homem-mais-rico-da-babilonia',
    title: 'O Homem Mais Rico da Babilônia',
    author: 'George S. Clason',
    category: 'Finanças',
    asin: '8595081530',
    cover: '/img/livros/o-homem-mais-rico-da-babilonia.jpg',
    description:
      'Um clássico de educação financeira contado em parábolas: gastar menos do que ganha, poupar e fazer o dinheiro trabalhar por você.'
  },
  {
    slug: 'a-psicologia-financeira',
    title: 'A Psicologia Financeira',
    author: 'Morgan Housel',
    category: 'Finanças',
    asin: '6555111100',
    cover: '/img/livros/a-psicologia-financeira.jpg',
    description:
      'Sobre como o comportamento pesa mais do que a planilha quando o assunto é dinheiro.'
  },
  {
    slug: 'o-povo-brasileiro',
    title: 'O Povo Brasileiro',
    author: 'Darcy Ribeiro',
    category: 'Política e Sociedade',
    asin: '8526022253',
    cover: '/img/livros/o-povo-brasileiro.jpg',
    description:
      'A formação e o sentido do Brasil: como a nossa história ajuda a explicar as estruturas que ainda enfrentamos.'
  },
  {
    slug: 'manifesto-comunista',
    title: 'Manifesto Comunista',
    author: 'Karl Marx e Friedrich Engels',
    category: 'Política e Sociedade',
    asin: '8585934239',
    cover: '/img/livros/manifesto-comunista.jpg',
    description:
      'Texto curto e fundamental pra entender luta de classes e boa parte do debate político dos últimos 170 anos.'
  },
  {
    slug: 'projetando-aplicacoes-com-uso-intensivo-de-dados',
    title: 'Projetando Aplicações com Uso Intensivo de Dados',
    author: 'Martin Kleppmann e Chris Riccomini',
    category: 'Tecnologia',
    asin: '6583913062',
    cover: '/img/livros/projetando-aplicacoes-com-uso-intensivo-de-dados.jpg',
    description:
      'O famoso "Designing Data-Intensive Applications": bancos de dados, replicação, particionamento e sistemas distribuídos.'
  },
  {
    slug: 'entendendo-algoritmos',
    title: 'Entendendo Algoritmos',
    author: 'Aditya Y. Bhargava',
    category: 'Tecnologia',
    asin: '8575225634',
    cover: '/img/livros/entendendo-algoritmos.jpg',
    description:
      'Algoritmos explicados com desenhos (e ratinhos na capa). Ótimo pra quem está começando ou quer revisar a base.'
  },
  {
    slug: 'o-projeto-fenix',
    title: 'O Projeto Fênix',
    author: 'Gene Kim, Kevin Behr e George Spafford',
    category: 'Tecnologia',
    asin: '8550814067',
    cover: '/img/livros/o-projeto-fenix.jpg',
    description:
      'Um romance sobre TI, DevOps e como fazer o negócio andar, que lembra muito o dia a dia de qualquer empresa.'
  }
]

export const getAffiliateUrl = (asin: string): string =>
  `https://www.amazon.com.br/dp/${asin}?tag=${AMAZON_AFFILIATE_TAG}`

export const getTotalPages = (total: number, perPage = BOOKS_PER_PAGE) =>
  Math.max(1, Math.ceil(total / perPage))

export const paginate = <T>(
  items: T[],
  page: number,
  perPage = BOOKS_PER_PAGE
) => {
  const start = (page - 1) * perPage
  return items.slice(start, start + perPage)
}
