import React from 'react'

export default function UserMadePlaylistsTitle({topic}) {
      
  return (
    <div className={`w-full col-span-full  flex items-center justify-start `}>
      <h3 className='text-white font-medium text-[16px] lg:text-xl capitalize'>{topic}</h3>
    </div>
  )
}
