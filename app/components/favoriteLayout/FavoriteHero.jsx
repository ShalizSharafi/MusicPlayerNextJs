'use client'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function FavoriteHero() {
       const searchParams = useSearchParams()
       const type = searchParams.get('type') || 'all' //type is either all or the 'type'

return(
       <ul className='w-full flex flex-wrap p-5 lg:p-10 items-center gap-2.5 *:rounded-[5px] *:grow *:lg:grow-0 '>
              {['all','track','album','playlist','radio'].map((item)=>{
                    return(
                      <li className='px-2.5 py-0.5 bg-white flex text-black items-center justify-center hover:text-white hover:bg-black duration-400' key={item}>
                            <Link href={`/favorites?type=${item}`}>{item}</Link>
                     </li>
                    )
              })}
       </ul>
)
}
