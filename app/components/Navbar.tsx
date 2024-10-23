import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-red-950 h-70'>
      
    
    
    
    
    
    
    
    
    <div className='text-white flex justify-between items-center'>
      <h1 className='text-xl m-2 cursor-pointer text-left'>RAHAT FORTFOLIO</h1>
      <ul className='flex gap-5 mr-4 cursor-pointer'>
  <Link className='hover:text-blue-700' href="/">Home</Link>
  <Link className='hover:text-yellow-700' href="/">About</Link>
  <Link className='hover:text-green-900' href="/">Skills</Link>
  <Link className='hover:text-red-700' href="/">Contact</Link>
  </ul>
  </div>
    </div>
  )
}

export default Navbar
