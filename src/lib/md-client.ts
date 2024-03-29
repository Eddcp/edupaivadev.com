import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import { format } from 'date-fns'

const rootDirectory = process.cwd()
const postsDirectory = join(rootDirectory, 'posts')

type Items = {
  [key: string]: string
}

export function getPostBySlug(slug: string, fields: string[] = []): Items {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Items = {}

  const dateFormatted = format(new Date(data.date), 'yyyy-MM-dd')

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

    if (field === 'date') {
      items[field] = dateFormatted.toString()
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []): Items[] {
  const slugs = fs.readdirSync(postsDirectory)
  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) =>
      new Date(post1.date).valueOf() > new Date(post2.date).valueOf() ? -1 : 1
    )
}
