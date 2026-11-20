'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SlugRadio({picture,radioTitle,id}) {
  const router = useRouter()
 return (
    <div onClick={()=> router.push(`radio/${id}`)} className='w-full rounded-[10px] p-2.5 flex flex-wrap content-start gap-2.5 hover:bg-bareGray/20 duration-400 bg-transparent cursor-pointer hover:scale-95'>
      <figure className='w-full h-30  rounded-[5px] overflow-hidden lg:h-25 flex items-center justify-center '>
       <img src={picture} alt={radioTitle} className='w-full  h-full object-cover '/>
      </figure>
      <div className='w-full flex-wrap  gap-2'>
       <h3 className='w-full flex items-center justify-start text-start text-[12px] lg:text-[14px] font-bold text-white'><Link className='hover:text-white/90 duration-400' href={`/radio/${id}`}>{radioTitle}</Link></h3>
      </div>
    </div>
  )
}
