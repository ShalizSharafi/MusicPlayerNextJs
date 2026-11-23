
// import { fallbackColor } from '@/app/colors/genreColors'
import UserMadePlaylistsCards from '@/app/components/UserMadePlaylists/UserMadePlaylistsCards'
import UserMadePlaylistsLayout from '@/app/components/UserMadePlaylists/UserMadePlaylistsLayout'
// import { userPlaylistColors } from '@/app/colors/usermadePlaylistColors'
import React from 'react'

export default function page() {
  return (
    <>
    <UserMadePlaylistsLayout>
       <UserMadePlaylistsCards  />
    </UserMadePlaylistsLayout>
    </>
  )
}
