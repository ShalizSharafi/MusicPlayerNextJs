'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SlugArtists({src,artistName,id}) {
  const router = useRouter()
  return (
    <figure onClick={()=>router.push(`artist/${id}/top?limit=50`)} className='w-full group cursor-pointer *:my-5'>
       <img src={src} alt={artistName} className='object-cover [clip-path:circle(50%)] group-hover:scale-105 duration-400' />
      <figcaption className='text-white/80 hover:text-white duartion-400 capitalize text-center text-[14px]'><Link onClick={(e)=>e.stopPropagation()} href={`/artist/${id}/top?limit=50`}>{artistName}</Link></figcaption>
    </figure>
  )
}
