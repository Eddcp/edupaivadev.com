import Link from 'next/link'
import { useState } from 'react'

import links from '@/utils/navBarLinks'

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false)

  const onToggleNav = () => {
    setOpen((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }
  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="mx-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`fixed right-0 top-0 z-10 h-full w-full bg-primary opacity-95 duration-300 ease-in-out dark:bg-gray-800
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="mobile-menu"
      >
        <div className="layout mt-5 flex justify-between">
          <nav className="h-full">
            <ul>
              {links.map((link) => (
                <li
                  className="py-4"
                  key={`mobile-menu-${link.url}`}
                  onClick={onToggleNav}
                >
                  <Link href={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            aria-label="toggle modal"
            className="mr-1 h-8 w-8 cursor-auto focus:outline-none"
            onClick={onToggleNav}
          >
            {/* SVG from heroicons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
