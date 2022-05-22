/* eslint-disable */
const GithubSlugger = require('github-slugger')
const slugger = new GithubSlugger()

const kebabCase = (str: string) => slugger(str)

export default kebabCase
