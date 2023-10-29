import Link from 'next/link'
import { useRouter } from 'next/router'

import links from './../../utils/navBarLinks'

const Menu = () => {
  const router = useRouter()

  return (
    <div className="hidden lg:block">
      <nav className="flex justify-end items-center py-4">
        <ul className="flex justify-between items-center space-x-3">
          {links.map((link, index) => (
            <li key={index}>
              <Link legacyBehavior href={link.url}>
                <a className={router.pathname === link.url ? 'active' : ''}>
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
