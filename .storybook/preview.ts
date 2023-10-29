import type { Preview } from '@storybook/react'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'

const preview: Preview = {
  parameters: {
    nextRouter: {
      Provider: RouterContext.Provider
    },
    nextjs: {
      router: {
        path: '/',
        asPath: '/',
        query: {}
      }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
