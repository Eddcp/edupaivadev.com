import Link from 'next/link'
import { useRouter } from 'next/router'

import links from './content'

const Menu = () => {
  const router = useRouter()

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.url}>
              <a className={router.pathname === link.url ? 'active' : ''}>
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
