
import UserMadePlaylistsHero from '@/app/components/UserMadePlaylists/UserMadePlaylistsHero'
import UserMadePlaylistsMainLayout from '@/app/components/UserMadePlaylists/UserMadePlaylistsMainLayout'
import React, { Suspense } from 'react'

export  async function DynamicUserPlaylistContent({params,searchParams}) {
  const {userCreatedPlaylistId} = await params
  console.log('userCreatedPlaylistId :', userCreatedPlaylistId)
  const {type} = await searchParams
  return (
    <>
     <UserMadePlaylistsHero userCreatedPlaylistId={userCreatedPlaylistId}/>
      
      <UserMadePlaylistsMainLayout userCreatedPlaylistId={userCreatedPlaylistId}  />
    </>
  )
}



export default function page({params,searchParams}) {
  return (
    <Suspense fallback={<p>is loading ....</p>}>
      <DynamicUserPlaylistContent params={params}  searchParams={searchParams}/>
    </Suspense>
  )
}
