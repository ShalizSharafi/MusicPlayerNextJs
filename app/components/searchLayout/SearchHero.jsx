import React from 'react'
import Link from 'next/link'

export default function SearchHero({q}) {
  return (
    <ul className='w-full flex mt-32 flex-wrap p-5 lg:p-10 items-center gap-2.5 *:rounded-[5px] *:grow *:lg:grow-0'>
      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href={`?q=${q}&type=all`}>all</Link></li>
      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href={`?q=${q}&type=artist`}>artist</Link></li>
      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href={`?q=${q}&type=track`}>track</Link></li>
      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href={`?q=${q}&type=album`}>album</Link></li>
      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href={`?q=${q}&type=radio`}>radio</Link></li>
      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400'><Link href={`?q=${q}&type=playlist`}>playlist</Link></li>
    </ul>
  )
}
