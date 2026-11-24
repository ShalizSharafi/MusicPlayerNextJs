import React from 'react'
import Link from 'next/link'

export default function UserMadePlaylistsFilter() {
  return (
    <ul className='w-full flex flex-wrap p-5 lg:p-10 items-center gap-2.5 *:rounded-[5px] *:grow *:lg:grow-0'>
      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href=''>all</Link></li>
      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href=''>track</Link></li>
      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href=''>album</Link></li>
      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href=''>radio</Link></li>
      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href=''>playlist</Link></li>
    </ul>
  )
}
