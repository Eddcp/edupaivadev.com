import Menu from 'components/Menu'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from 'components/MobileMenu'

const Header = () => (
  <header className="bg-secondary">
    <div className="flex justify-between items-center layout">
      <Link href="/" aria-label="Logo">
        <div className="py-5">
          <Image
            src="/img/logo.svg"
            alt="logo edupaivadev"
            width="300"
            height="68"
          />
        </div>
      </Link>
      <Menu />
      <MobileMenu />
    </div>
  </header>
)

export default Header
