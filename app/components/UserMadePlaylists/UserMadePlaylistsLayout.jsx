import React from 'react'

export default function UserMadePlaylistsLayout({children}) {
  return (
       <>
      <div className='w-full p-5 lg:p-10 mt-32 flex items-center'>
       <h2 className='w-full flex items-center text-start justify-start text-white capitalize font-bold text-xl lg:text-2xl'>My Playlists</h2>
      </div>
    <div className={`w-full p-5 lg:p-10 grid md:grid-cols-4 xl:grid-cols-5 pt-5 lg:pt-8 gap-5 grid-cols-2 `}>
      {children}
    </div>
       </>
  )
}