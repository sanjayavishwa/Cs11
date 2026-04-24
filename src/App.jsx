import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import assets from './assets/assets'


const App = () => {
  const [theme, settheme] = useState(() => {
    // Get theme from localStorage or default to system preference
    const saved = localStorage.getItem('theme')
    if (saved) return saved

    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} settheme={settheme} assets={assets} />
      <Hero />
    </div>
   
  )
}

export default App