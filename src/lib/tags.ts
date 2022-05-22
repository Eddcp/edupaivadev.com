import { getAllPosts } from 'lib/md-client'

export function getAllTags(): Array<string> {
  const files = getAllPosts(['tags'])
  console.log('tags', files)

  const allTags = new Set<string>()
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const stringTags = file.tags.toString()
    const tags = stringTags.split(',')
    console.log('tags inside foreach', tags)
    tags.forEach((tag) => allTags.add(tag))
  })

  console.log('all tags', Array.from(allTags))

  return Array.from(allTags)
}
