import Link from 'next/link'
import { useState } from 'react'

import links from './../../utils/navBarLinks'

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
        className="py-1 mx-1 w-8 h-8 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
        className={`fixed top-0 right-0 z-10 h-full w-full transform bg-primary opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between mt-6 layout">
          <nav className="h-full">
            <ul>
              {links.map((link, index) => (
                <li className="py-4" key={index} onClick={onToggleNav}>
                  <Link href={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            aria-label="toggle modal"
            className="w-8 h-8 focus:outline-none cursor-auto"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
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
