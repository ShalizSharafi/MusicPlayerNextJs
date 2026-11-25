'use client'

import React from 'react'
import Link from 'next/link'
import userCreatedPlaylist from '@/app/store/UserCreatedPlaylist'
import { userPlaylistColors } from '@/app/colors/usermadePlaylistColors'
import RemovePlaylistItem from './RemovePlaylistItem'

export default function UserMadePlaylistsCards() {
  const playlists = userCreatedPlaylist((state)=>state.playlists)

  return(
       <>
       {playlists.map((p,i)=>{
               return(
                     <Link href={`/my-playlists/${p.userCreatedPlaylistId}`} key={p.userCreatedPlaylistId}  className='w-full rounded-[10px] p-2.5 flex relative group cursor-pointer flex-wrap content-start gap-2.5 hover:bg-bareGray/20 duration-400 hover:scale-95' style={{ background: `linear-gradient(to bottom right, ${p?.bgColor} ,transparent)`}}>
      <figure className='w-full h-30  rounded-[5px] overflow-hidden lg:h-25 flex items-center justify-center p-1 bg-white/15 '>
       <img src={p.image} alt={p.title} className='w-full  h-full object-contain '/>
      </figure>
      <div className='w-full flex-wrap  gap-2'>
       <h3 className='w-full flex items-center justify-start text-start text-[12px] lg:text-[14px] font-bold text-white'>{p.title}</h3>
       <h4 className='w-full flex items-center justify-start text-start text-xs text-white/60 hover:text-white duration-400'>Made by you</h4>
       <span className='w-full flex items-center justify-start text-start text-xs font-bold text-white capitalize'>{p.playlistItems?.length ?? 0 } tracks</span>
                   <span className='w-6 h-6 absolute bottom-1 hidden items-center justify-center right-1 rounded-[5px] group-hover:flex duration-400'>
        <RemovePlaylistItem playlistOnly userCreatedPlaylistId={p.userCreatedPlaylistId} />
      </span>

      </div>
    </Link>
               )
       })}
       </>
  )
}


