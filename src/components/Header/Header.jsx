import React from 'react'
import Logo from '../Logo/Logo.jsx'
import NavBar from '../NavBar/NavBar.jsx'
export default function Header() {
  return (
    <header className='flex justify-between items-center bg-slate-900 border rounded-b-3xl py-6 border-slate-900'>
      <div> <Logo/ ></div>
      <div> <NavBar/ > </div>
    </header>
  )
}
