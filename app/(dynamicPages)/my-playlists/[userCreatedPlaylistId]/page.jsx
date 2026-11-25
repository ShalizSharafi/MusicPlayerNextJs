import UserMadePlaylistsFilter from '@/app/components/UserMadePlaylists/UserMadePlaylistsFilter'
import UserMadePlaylistsHero from '@/app/components/UserMadePlaylists/UserMadePlaylistsHero'
import UserMadePlaylistsMainLayout from '@/app/components/UserMadePlaylists/UserMadePlaylistsMainLayout'
import React, { Suspense } from 'react'

export  async function DynamicUserPlaylistContent({params}) {
  const {userCreatedPlaylistId} = await params
  console.log('userCreatedPlaylistId :', userCreatedPlaylistId)

  return (
    <>
     <UserMadePlaylistsHero userCreatedPlaylistId={userCreatedPlaylistId}/>
      <UserMadePlaylistsFilter/>
      <UserMadePlaylistsMainLayout userCreatedPlaylistId={userCreatedPlaylistId}/>
    </>
  )
}



export default function page({params}) {
  return (
    <Suspense fallback={<p>is loading ....</p>}>
      <DynamicUserPlaylistContent params={params}/>
    </Suspense>
  )
}
