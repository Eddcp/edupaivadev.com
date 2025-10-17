import Menu from 'components/Menu'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from 'components/MobileMenu'
import LanguageToggle from 'components/LanguageToggle'

const Header = () => (
  <header className="bg-secondary">
    <div className="layout flex items-center justify-between text-lg">
      <Link legacyBehavior href="/" aria-label="Logo">
        <a className="py-5">
          <Image
            src="/img/logo.svg"
            alt="logo edupaivadev"
            width="300"
            height="68"
          />
        </a>
      </Link>
      <div className="flex items-center space-x-4">
        <Menu />
        <LanguageToggle />
        <MobileMenu />
      </div>
    </div>
  </header>
)

export default Header
