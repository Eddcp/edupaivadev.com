import { books, getAffiliateUrl, getTotalPages, paginate } from './books'

describe('books', () => {
  it('should build the affiliate url with the associate tag', () => {
    expect(getAffiliateUrl('8526022253')).toBe(
      'https://www.amazon.com.br/dp/8526022253?tag=edupaivadev-20'
    )
  })

  it('should calculate total pages with at least one page', () => {
    expect(getTotalPages(0, 6)).toBe(1)
    expect(getTotalPages(6, 6)).toBe(1)
    expect(getTotalPages(7, 6)).toBe(2)
  })

  it('should return the items of the requested page', () => {
    const items = [1, 2, 3, 4, 5, 6, 7]

    expect(paginate(items, 1, 6)).toEqual([1, 2, 3, 4, 5, 6])
    expect(paginate(items, 2, 6)).toEqual([7])
  })

  it('should have unique slugs and asins', () => {
    const slugs = books.map((b) => b.slug)
    const asins = books.map((b) => b.asin)

    expect(new Set(slugs).size).toBe(slugs.length)
    expect(new Set(asins).size).toBe(asins.length)
  })
})
