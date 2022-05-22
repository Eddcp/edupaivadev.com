declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

export {}

/* eslint-disable */
declare global {
  interface Window {
    gtag?: any // 👈️ turn off type checking
  }
}