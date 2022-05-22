import { getAllPosts } from 'lib/md-client'

export function getAllTags(): Array<string> {
  const files = getAllPosts(['tags'])

  const allTags = new Set<string>()
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const stringTags = file.tags.toString()
    const tags = stringTags.split(',')
    tags.forEach((tag) => allTags.add(tag))
  })

  return Array.from(allTags)
}
