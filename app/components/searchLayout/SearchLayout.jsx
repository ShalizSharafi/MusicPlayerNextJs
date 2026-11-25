import React from 'react'
import UserMadeEmpty from '../UserMadePlaylists/UserMadeEmpty'

export default function SearchLayout({children,type,results}) {
  console.log('search results:', results)
  const isEmpty = type === 'all'
  ? results?.artists?.length === 0 &&
    results?.album?.length === 0 &&
    results?.tracks?.length === 0 &&
    results?.radio?.length === 0 &&
    results?.playlist?.length === 0
  : results?.length === 0
  return (
       <>
      {isEmpty && (
  <div className='w-full p-5 lg:p-10'>
    <UserMadeEmpty
      title='No Results Found'
      description='Try searching for something else.'
    />
  </div>
)}

    <div className={`w-full p-5 lg:p-10 grid md:grid-cols-4 xl:grid-cols-5 pt-5 lg:pt-8 ${type === 'artist' ? 'gap-10 grid-cols-3 ' : 'gap-5 grid-cols-2 '}`}>
      {children}
    </div>
       </>
  )
}
