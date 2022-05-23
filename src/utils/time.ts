export const timeToRead = (text: string) => {
  const words = text.split(' ')
  const minutes = Math.ceil(words.length / 200)
  return `${minutes} min de leitura`
}
