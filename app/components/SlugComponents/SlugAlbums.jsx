'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LikeSVG from '../ContentLayout/LikeSVG'
import useFavoriteStore from '@/app/store/FavoriteStore'
// import usePlayerStore from '@/app/store/PlayerStore'

export default function SlugAlbums({cover,albumTitle,artist,position,id}) {
  const router = useRouter()
  const toggleFavorites = useFavoriteStore((state)=>state.toggleFavorites)//the function axpects one (item) so inside the onClick we pass one object!
  const isFavorite = useFavoriteStore((state)=>state.isFavorite(id,'album'))
  return (
    <div onClick={()=>router.push(`/album/${id}`)} className={`w-full bg-black rounded-[10px] p-2.5 flex flex-wrap content-start cursor-pointer gap-2.5 hover:bg-bareGray/20 duration-400 hover:scale-95 relative group `}>
      <figure className='w-full h-30  rounded-[5px] overflow-hidden lg:h-25 flex items-center justify-center p-1 bg-white/15 '>
       <img src={cover} alt={albumTitle} className='w-full  h-full object-contain '/>
      </figure>
      <div className='w-full flex-wrap  gap-2'>
       <h3 className='w-full flex items-center justify-start text-start text-[12px] lg:text-[14px] font-bold text-white'><Link className='hover:text-white/90 duration-400' href=''>{albumTitle}</Link></h3>
       {artist && <h4 className='w-full flex items-center justify-start text-start text-xs text-white/60'><Link className='hover:text-white duration-400' href=''>{artist}</Link></h4>}
       {position && <span className='w-full flex items-center justify-start text-start text-xs text-white/50'><Link className='hover:text-white duration-400' href=''>{position} on the charts</Link></span>}
      </div>
      <span onClick={(e)=>{
        e.stopPropagation()
        toggleFavorites({
          cover,
          albumTitle,
          position,
          id,
          artist,
          type:'album'
        })
      }} className='w-6 h-6 absolute top-1 hidden items-center justify-center right-1 rounded-[5px] group-hover:flex duration-400'>
              <LikeSVG liked={isFavorite}/>
            </span>
    </div>
  )
}
