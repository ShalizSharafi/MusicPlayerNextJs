'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LikeSVG from '../ContentLayout/LikeSVG'
import useFavoriteStore from '@/app/store/FavoriteStore'
import PlusSvg from '../ContentLayout/PlusSvg'
import userCreatedPlaylist from '@/app/store/UserCreatedPlaylist'
import PlaylistMenu from '../ContentLayout/PlayListMenu'
import RemovePlaylistItem from '../UserMadePlaylists/RemovePlaylistItem'

export default function SlugRadio({picture,radioTitle,id,userCreatedPlaylistId}) {
  const router = useRouter()
  const toggleFavorites = useFavoriteStore((state)=>state.toggleFavorites)
  const isFavorite = useFavoriteStore((state)=>state.isFavorite(id,'radio'))
   const playlists = userCreatedPlaylist((state)=>state.playlists)
  const isAdded = playlists.some((val)=>
  val?.playlistItems?.some((p)=>p.id === id && p.type === 'radio')
  )

  const [anchorEl,setAnchorEl] = useState(null)

 return (
    <div onClick={()=> router.push(`/radio/${id}`)} className='w-full rounded-[10px] p-2.5 flex flex-wrap content-start gap-2.5 hover:bg-bareGray/20 duration-400 bg-transparent cursor-pointer hover:scale-95 group relative'>
      <figure className='w-full h-30  rounded-[5px] overflow-hidden lg:h-25 flex items-center justify-center '>
       <img src={picture} alt={radioTitle} className='w-full  h-full object-cover '/>
      </figure>
      <div className='w-full flex-wrap  gap-2'>
       <h3 className='w-full flex items-center justify-start text-start text-[12px] lg:text-[14px] font-bold text-white'><Link className='hover:text-white/90 duration-400' href={`/radio/${id}`}>{radioTitle}</Link></h3>
      </div>
      <span onClick={(e)=>{
        e.stopPropagation()
        toggleFavorites({
          picture,
        radioTitle,
        id,
        type:'radio',
        })
      }} className='w-6 h-6 absolute top-1 hidden items-center justify-center right-1 rounded-[5px] group-hover:flex duration-400'>
              <LikeSVG liked={isFavorite}/>
            </span>
             <span onClick={(e)=>{
              e.stopPropagation()
              setAnchorEl(anchorEl ? null : e.currentTarget)
             }} className='w-6 h-6 absolute top-1 hidden items-center justify-center left-1 rounded-[5px] group-hover:flex duration-400'>
                    <PlusSvg added={isAdded}/>
                    <PlaylistMenu playlists={playlists} anchorEl={anchorEl} onClose={()=>setAnchorEl(null)} open={Boolean(anchorEl)} item={{
                      type:'radio',
                      picture,
                      radioTitle,
                      id
                    }}/>
                  </span>
                  {userCreatedPlaylistId && (
                        <span className='w-6 h-6 absolute bottom-1 hidden items-center justify-center right-1 rounded-[5px] group-hover:flex duration-400'>
                          <RemovePlaylistItem userCreatedPlaylistId={userCreatedPlaylistId} itemId={id} itemType='track'/>
                        </span>
                       )}
    </div>
  )
}
