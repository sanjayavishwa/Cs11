import React, { useState } from 'react'
import defaultAssets from '../assets/assets'

const Navbar = ({ theme, settheme, assets = defaultAssets }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    settheme(theme === 'light' ? 'dark' : 'light')
  }


  // This function is called by both the menu icon and all menu links
  const handleMenuAction = () => {
    setMenuOpen(prev => !prev)
    // You can add more logic here if needed
  }
  
  return (
    <header className="sticky top-0 z-20 bg-white/50 backdrop-blur-xl dark:bg-gray-700 px-4 py-4 sm:px-12 lg:px-24 xl:px-24">
      <div className="flex items-center justify-between gap-4">
        <img
          src={theme === 'dark' ? assets.logo_dark : assets.logo}
          className="w-32 sm:w-40"
          alt="Logo"
        />

        <nav className="hidden sm:flex items-center gap-6 text-gray-700 dark:text-white">
          <a href="#" className="hover:border-b transition-colors">
            Home
          </a>
          <a href="#product" className="hover:border-b transition-colors">
            Product
          </a>
          <a href="#about" className="hover:border-b transition-colors">
            About
          </a>
          <a href="#contacts" className="hover:border-b transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={handleMenuAction}
            className="sm:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <img
              src={assets.menu_icon}
              alt={menuOpen ? 'Close menu' : 'Open menu'}
              className="w-6 h-6"
            />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            aria-label="Toggle theme"
          >
            <img
              src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
              alt={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>

      <div
        className={`sm:hidden absolute left-4 top-full mt-4 w-[calc(100vw-2rem)] max-w-1/2 rounded-2xl border border-gray-200 bg-white/95 shadow-xl dark:border-gray-700 dark:bg-gray-800 transition-all ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col  pb-30 gap-3 p-4 text-gray-700 dark:text-white">
          <a href="#" onClick={handleMenuAction} className="rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            Home
          </a>
          <a href="#product" onClick={handleMenuAction} className="rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-red-900">
            Product
          </a>
          <a href="#about" onClick={handleMenuAction} className="rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            About
          </a>
          <a href="#contacts" onClick={handleMenuAction} className="rounded-xl px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar