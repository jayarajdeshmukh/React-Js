import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
      <h2 className='text-2xl'>Jay</h2>
    <div className='flex gap-10 underline text-lg'>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>
    </div>
    </div>
  )
}

export default Header
