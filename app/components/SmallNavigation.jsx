import React from 'react'
import Link from 'next/link'

export default function Navigation({hamOpen}) {
  return (
    <nav className={`w-full lg:hidden p-5 items-center ${hamOpen? 'flex' : 'hidden'}`}>
      <ul className='w-full flex items-center justify-center '>
       <li className='flex px-2.5 group hover:*:text-white items-center justify-center'>
              <Link href='/premium' className='text-white/75  group-hover:scale-105 text-[14px] duration-400 font-bold capitalize'>premium</Link>
       </li>

       <li className='flex px-2.5 group hover:*:text-white items-center justify-center'>
              <Link href='/support' className='text-white/75  group-hover:scale-105 text-[14px] duration-400 font-bold capitalize'>support</Link>
       </li>

       <li className='flex px-2.5 group hover:*:text-white items-center justify-center '>
              <Link href='/download' className='text-white/75 group-hover:scale-105 text-[14px] duration-400  font-bold capitalize'>download</Link>
             
       </li>

        <li className='flex px-2.5 group hover:*:text-white items-center justify-center'>
              <Link href='/download' className='text-white/75 group-hover:scale-105 text-[14px]  duration-400  font-bold capitalize'>Install App</Link>
       </li>
      </ul>
    </nav>
  )
}
