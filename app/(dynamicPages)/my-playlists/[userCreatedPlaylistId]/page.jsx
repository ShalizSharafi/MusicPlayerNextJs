import UserMadePlaylistsFilter from '@/app/components/UserMadePlaylists/UserMadePlaylistsFilter'
import UserMadePlaylistsHero from '@/app/components/UserMadePlaylists/UserMadePlaylistsHero'
import UserMadePlaylistsMainLayout from '@/app/components/UserMadePlaylists/UserMadePlaylistsMainLayout'
import React from 'react'

export default function page() {
  return (
    <>
     <UserMadePlaylistsHero/>
      <UserMadePlaylistsFilter/>
      <UserMadePlaylistsMainLayout/>
    </>
  )
}
