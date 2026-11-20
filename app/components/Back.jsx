'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Back({hamOpen,scrolled}) {
       const router = useRouter()
  return (
    <div  className={`w-full lg:w-3/4 p-2 fixed top-20 right-0   items-center z-100 justify-start backdrop-blur-2xl duration-400 ${scrolled ? 'bg-black' : 'bg-bareGray/50'} ${hamOpen ? 'hidden' : 'flex'}`}>
      <span className='w-8 h-8 cursor-pointer hover:scale-105 duration-400 flex items-center justify-center' onClick={()=>router.back()} >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11V8L8 12L12 16V13H16V11H12Z"></path></svg>
      </span>
    </div>
  )
}
