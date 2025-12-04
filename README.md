# edupaivadev.com

Personal website and blog for posting about professional, personal, and financial development.

**EN:** Personal website for posting about professional, personal and financial development.

**PT-BR:** Site pessoal para postagens/tutoriais de desenvolvimento profissional, pessoal e financeiro.

## 🚀 Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with SSR/SSG
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Netlify CMS](https://www.netlifycms.org/)** - Git-based content management
- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Markdown rendering
- **[Next SEO](https://github.com/garmeeh/next-seo)** - SEO optimization
- **[Storybook](https://storybook.js.org/)** - Component development and testing
- **[Jest](https://jestjs.io/)** & **[React Testing Library](https://testing-library.com/react)** - Testing
- **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)** - Code quality

## ✨ Features

- 📝 **Blog System** - Markdown-based blog posts with frontmatter
- 🎨 **Custom Design** - Tailwind CSS with custom fonts (Bw Gradual, Antarctican Mono)
- 📱 **Responsive Design** - Mobile-first approach
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, and sitemap generation
- 📧 **Contact Form** - Email integration via Gmail OAuth2
- 🎯 **Content Management** - Netlify CMS for easy content editing
- 🧩 **Component Library** - Storybook for component development
- 🧪 **Testing** - Jest and React Testing Library setup
- ⚡ **Performance** - Static site generation with Next.js
- 🎨 **Syntax Highlighting** - Code blocks with syntax highlighting

## 📋 Prerequisites

- **Node.js** 16.9+ (for Corepack support)
- **Yarn** 4.0.1 (managed via Corepack)
- **Git** for version control

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/eddcp/edupaivadev.com.git
cd edupaivadev.com
```

### 2. Enable Corepack (if not already enabled)

```bash
corepack enable
```

### 3. Install dependencies

```bash
yarn install
```

### 4. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Gmail OAuth2 for Contact Form
CLIENT_ID=your_gmail_client_id
CLIENT_SECRET=your_gmail_client_secret
REFRESH_TOKEN=your_gmail_refresh_token
SMTP_USER=your_gmail_address@gmail.com

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

**Note:** For Gmail OAuth2 setup, follow the [Gmail API OAuth2 guide](https://developers.google.com/gmail/api/quickstart/nodejs).

### 5. Run the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
edupaivadev.com/
├── public/
│   ├── admin/              # Netlify CMS configuration
│   │   └── config.yml
│   ├── fonts/              # Custom fonts
│   ├── img/                # Images and assets
│   └── robots.txt
├── posts/                  # Blog posts (Markdown files)
├── src/
│   ├── components/         # React components
│   │   ├── Analytics/
│   │   ├── ContactForm/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── HeroSection/
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries
│   │   ├── gtag.ts         # Google Analytics
│   │   ├── md-client.ts    # Markdown processing
│   │   └── tags.ts         # Tag utilities
│   ├── pages/              # Next.js pages
│   │   ├── api/            # API routes
│   │   │   ├── auth.ts     # Netlify CMS auth
│   │   │   ├── callback.ts # Netlify CMS callback
│   │   │   └── contact.ts  # Contact form handler
│   │   ├── _app.tsx        # App wrapper
│   │   ├── _document.tsx  # Document wrapper
│   │   ├── index.tsx       # Home page
│   │   ├── blog.tsx        # Blog listing
│   │   └── blog/[slug].tsx # Blog post page
│   ├── styles/             # Global styles
│   ├── templates/          # Page templates
│   ├── types/              # TypeScript types
│   └── utils/              # Utility functions
├── .storybook/             # Storybook configuration
├── coverage/               # Test coverage reports
└── storybook-static/       # Built Storybook
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server on [http://localhost:3000](http://localhost:3000) |
| `yarn build` | Build production-ready application |
| `yarn start` | Start production server (requires `yarn build` first) |
| `yarn lint` | Run ESLint to check code quality |
| `yarn test` | Run Jest tests |
| `yarn test:watch` | Run tests in watch mode |
| `yarn test:ci` | Run tests in CI mode |
| `yarn storybook` | Start Storybook on [http://localhost:6006](http://localhost:6006) |
| `yarn build-storybook` | Build static Storybook |

## 📝 Netlify CMS Setup

This project uses Netlify CMS for content management. The CMS is configured in `public/admin/config.yml`.

### Features:
- **Git-based workflow** - Content stored in Git repository
- **Editorial workflow** - Draft and review process
- **Local backend** - Test CMS locally with `local_backend: true`
- **Markdown editor** - Write posts in Markdown

### Accessing the CMS:
- **Production:** `https://yourdomain.com/admin`
- **Local:** `http://localhost:3000/admin` (with `local_backend: true`)

### Creating a New Post:
1. Navigate to `/admin`
2. Click "New Post"
3. Fill in the frontmatter fields (title, date, tags, etc.)
4. Write your content in Markdown
5. Save as draft or publish

## 🎨 Styling

### Tailwind Configuration

Custom theme configuration in `tailwind.config.js`:
- **Primary color:** `#1E1E26`
- **Secondary color:** `#0F0D19`
- **Brand color (red):** `#FF0043`
- **Neutral color:** `#E9E7F5`

### Custom Fonts
- **Bw Gradual** - Main font family
- **Antarctican Mono** - Monospace font

### Typography Plugin
Uses `@tailwindcss/typography` for beautiful markdown content styling.

## 🧪 Testing

Tests are written with Jest and React Testing Library:

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests for CI
yarn test:ci
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The project is configured for Vercel with:
- Automatic deployments on push to `main` branch
- Preview deployments for pull requests
- Sitemap generation via `next-sitemap`

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `CLIENT_ID`
- `CLIENT_SECRET`
- `REFRESH_TOKEN`
- `SMTP_USER`
- `NEXT_PUBLIC_GA_ID` (optional)

## 📧 Contact Form

The contact form uses Gmail OAuth2 to send emails. To set it up:

1. Create a Google Cloud Project
2. Enable Gmail API
3. Create OAuth2 credentials
4. Set up OAuth2 Playground to get refresh token
5. Add credentials to `.env.local`

## 🔧 Configuration Files

- **`next.config.js`** - Next.js configuration
- **`tailwind.config.js`** - Tailwind CSS customization
- **`tsconfig.json`** - TypeScript configuration
- **`jest.config.js`** - Jest testing configuration
- **`.eslintrc`** - ESLint rules
- **`next-sitemap.js`** - Sitemap generation config
- **`next-seo.config.ts`** - SEO defaults

## 📚 Blog Post Format

Blog posts are Markdown files in the `posts/` directory with frontmatter:

```markdown
---
title: Your Post Title
author: Eduardo Paiva
date: 2024-01-01 10:00:00
tags:
  - tag1
  - tag2
categories:
  - category-name
thumbnail: https://images.unsplash.com/...
featured_image:
  src: https://images.unsplash.com/...
  alt: Image description
---

Your markdown content here...
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

**Eduardo Paiva**
- Website: [edupaivadev.com](https://edupaivadev.com)
- Twitter: [@edupaivadev](https://twitter.com/edupaivadev)

---

Made with ❤️ using Next.js and Tailwind CSS