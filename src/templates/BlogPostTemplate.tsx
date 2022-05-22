import { BlogPost } from 'types/post'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const BlogPostTemplate = ({ post }: BlogPost) => {
  return (
    <article className="layout markdown">
      <h1 className="text-3xl font-bold sm:text-5xl">{post.title}</h1>
      <ReactMarkdown
        components={{
          code({ className, children }) {
            const language = className?.replace('language-', '')
            return (
              <SyntaxHighlighter style={darcula} language={language}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            )
          }
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  )
}

export default BlogPostTemplate
