import React from 'react'

export default function ArtistTitle({artistTitle}) {
  return (
    <div className='w-full flex mt-5 bg-black mb-5'>
                  <h3 className='w-full flex items-center justify-start text-start text-white  text-[15px] lg:text-2xl font-bold capitalize'>{artistTitle}</h3>
           </div>
  )
}
