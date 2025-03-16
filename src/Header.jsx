import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/logo.png'

function Header() {
  const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;

  console.log(apiKey); // Test if the key is loaded
  
  return (
    <>
      <header className='header-con'>
        <img src={Logo} alt="logo" width="100px" className='logo'/>
        <h1> Chef Claude</h1>
      </header>
    </>
  )
}

export default Header
