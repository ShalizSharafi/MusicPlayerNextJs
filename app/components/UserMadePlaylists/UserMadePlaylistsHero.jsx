'use client'
 import userCreatedPlaylist from '@/app/store/UserCreatedPlaylist'
import React from 'react'

export default function UserMadePlaylistsHero({userCreatedPlaylistId}) {

  const playlists = userCreatedPlaylist((state)=>state.playlists)
  const playlist = playlists.find((val)=>val.userCreatedPlaylistId === Number(userCreatedPlaylistId))
  console.log('playlist:', playlist)
console.log('bgColor:', playlist?.bgColor)

  return (
    <div className='w-full mt-32 flex flex-wrap rounded-[5px] py-2.5 lg:py-0 ' style={{background: `linear-gradient(to bottom left, ${playlist?.bgColor} ,transparent)`}}>
      <figure className='w-42 lg:w-52 h-42 lg:h-52 flex items-center justify-center'>
       <img className='w-2/3 h-2/3 object-cover rounded-xs' src={playlist?.image} alt={playlist?.title} />
      </figure>
      <div className='w-full gap-2.5 lg:w-[calc(100%-208px)] justify-start flex flex-wrap content-start p-5'>
       <span className='text-white font-normal text-start w-full flex items-center justify-start capitalize'>playlist</span>
      <h2 className='text-3xl lg:text-5xl text-white capitalize flex w-full items-center justify-start text-start font-bold'>{playlist?.title}</h2> 
       <ul className='w-full  flex items-center justify-start gap-2.5 *:text-xs *:lg:text-[15px] *:hover:text-white *:duration-400 '>  
              <li className='text-white/70 capitalize flex items-center  '>{playlist?.playlistItems?.length ?? 0} items</li>
       </ul>
      </div>
    </div>
  )
}