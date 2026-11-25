import React from 'react'
import Link from 'next/link'

export default function UserMadePlaylistsFilter({userCreatedPlaylistId}) {
  return (
    <ul className='w-full flex flex-wrap  items-center gap-2.5 *:rounded-[5px] *:grow *:lg:grow-0'>
      {['all','track','album','playlist','radio'].map((item,i)=>{
        return(
          <li key={i} className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href={`/my-playlists/${userCreatedPlaylistId}?type=${item}`}>{item}</Link></li>
        )
      })}
    </ul>
  )
}

      