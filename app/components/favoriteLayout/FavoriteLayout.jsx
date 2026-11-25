
import UserMadeEmpty from '../UserMadePlaylists/UserMadeEmpty'
import React from 'react'

export default function FavoriteLayout({children,favorites}) {
  return (
       <>
       {/* ///if there's no fave */}
        {favorites?.length === 0 && (       
         <div className='w-full p-5 lg:p-10 '>
          <UserMadeEmpty title='No favorites yet' description='Add songs, albums, playlists, or radios to your favorites.' />
         </div>
             ) }

    <div className={`w-full p-5 lg:p-10 grid md:grid-cols-4 xl:grid-cols-5 pt-5 lg:pt-8 gap-5 grid-cols-2`}>
       
      {children}
    </div>
       </>
  )
}
