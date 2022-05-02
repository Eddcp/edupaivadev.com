import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const rootDirectory = process.cwd()
const postsDirectory = join(rootDirectory, 'posts')

export function getPostBySlug(slug: string, fields: string[] = []) {
  if (!slug) return null

  const realSlug = slug.replace('/.md$/', '')
  const fullPath = join(postsDirectory, `${realSlug}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = fs.readdirSync(postsDirectory)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1!.date > post2!.date ? -1 : 1))

  return posts
}
