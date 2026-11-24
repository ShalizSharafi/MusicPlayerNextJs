'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LikeSVG from '../ContentLayout/LikeSVG'
import useFavoriteStore from '@/app/store/FavoriteStore'
import PlusSvg from '../ContentLayout/PlusSvg'

export default function SlugPlaylists({playlistTitle,picture,user,count,bgColor,id}) {
  const router = useRouter()
  const toggleFavorites = useFavoriteStore((state)=>state.toggleFavorites)
  const isFavorite = useFavoriteStore((state)=>state.isFavorite(id,'playlist'))
  return (
    <div onClick={()=>router.push(`playlist/${id}`)} className='w-full rounded-[10px] p-2.5 flex relative group cursor-pointer flex-wrap content-start gap-2.5 hover:bg-bareGray/20 duration-400 hover:scale-95' style={{background : `linear-gradient(to bottom right, ${bgColor},${bgColor}, transparent)`}}>
      <figure className='w-full h-30  rounded-[5px] overflow-hidden lg:h-25 flex items-center justify-center p-1 bg-white/15 '>
       <img src={picture} alt={playlistTitle} className='w-full  h-full object-contain '/>
      </figure>
      <div className='w-full flex-wrap  gap-2'>
       <h3 className='w-full flex items-center justify-start text-start text-[12px] lg:text-[14px] font-bold text-white'><Link className='hover:text-white/90 duration-400' href=''>{playlistTitle}</Link></h3>
       <h4 className='w-full flex items-center justify-start text-start text-xs text-white/60 hover:text-white duration-400'>Made by {user}</h4>
       <span className='w-full flex items-center justify-start text-start text-xs font-bold text-white capitalize'>{count} tracks</span>
      </div>
      <span onClick={(e)=>{
        e.stopPropagation()
        toggleFavorites({
          playlistTitle,
          picture,
          user,
          count,
          bgColor,
          id,
          type:'playlist'
        })
      }} className='w-6 h-6 absolute top-1 hidden items-center justify-center right-1 rounded-[5px] group-hover:flex duration-400'>
              <LikeSVG liked={isFavorite}/>
            </span>
             <span onClick={(e)=>e.stopPropagation()} className='w-6 h-6 absolute top-1 hidden items-center justify-center left-1 rounded-[5px] group-hover:flex duration-400'>
                    <PlusSvg added={false}/>
                  </span>
    </div>
  )
}
