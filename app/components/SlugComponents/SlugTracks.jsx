'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LikeSVG from '../ContentLayout/LikeSVG'

export default function SlugTracks({trackName,artist,album,src,id,albumId,artistId}) {
  const router = useRouter()
  return (
    <div onClick={()=>router.push(`/track/${id}`)} className='w-full bg-transparent relative cursor-pointer rounded-[10px] p-2.5 flex flex-wrap content-start gap-2.5 hover:bg-bareGray/20 duration-400 hover:scale-95 group'>
      <figure className='w-full h-30  rounded-[5px] overflow-hidden lg:h-25 flex items-center justify-center p-1 bg-white/15 '>
       <img src={src} alt={trackName} className='w-full  h-full object-contain '/>
      </figure>
      <div className='w-full flex-wrap  gap-2'>
       <h3 className='w-full flex items-center justify-start text-start text-[12px] lg:text-[14px] font-bold text-white'><Link className='hover:text-white/90 duration-400' href={`/track/${id}`}  onClick={(e)=>e.stopPropagation()}>{trackName}</Link></h3>
       <h4 className='w-full flex items-center justify-start text-start text-xs text-white/60'><Link className='hover:text-white duration-400' href={`/artist/${artistId}`} onClick={(e)=>e.stopPropagation()}>{artist}</Link></h4>
       <span className='w-full flex items-center justify-start text-start text-xs text-white/50'><Link className='hover:text-white duration-400' href={`/album/${albumId}`} onClick={(e)=>e.stopPropagation()}>{album}</Link></span>
      </div>
      <span className='w-6 h-6 absolute top-1 hidden items-center justify-center right-1 rounded-[5px] group-hover:flex duration-400'>
        <LikeSVG/>
      </span>
    </div>
  )
}


{/* <Link href='' className='w-1/3 lg:w-1/5 bg-bareBlack/50 rounded-[10px]  p-2.5 grow flex flex-wrap  content-start gap-2.5 '></Link> */}