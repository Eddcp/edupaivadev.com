import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import links from './../../utils/navBarLinks'

const Menu = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <div className="hidden lg:block">
      <nav className="flex items-center justify-end py-4" aria-label="menu">
        <ul className="flex items-center justify-between space-x-3">
          {links.map((link) => (
            <li key={`${link.url}`}>
              <Link legacyBehavior href={link.url}>
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <a className={router.pathname === link.url ? 'active' : ''}>
                  {t(link.labelKey)}
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
