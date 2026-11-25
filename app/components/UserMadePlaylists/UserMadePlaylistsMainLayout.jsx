'use client'
import userCreatedPlaylist from '@/app/store/UserCreatedPlaylist'
import UserMadePlaylistMainGrid from './UserMadePlaylistMainGrid'
import React from 'react'
import SlugTracks from '../SlugComponents/SlugTracks'
import UserMadePlaylistsTitle from './UserMadePlaylistsTitle'
import SlugAlbums from '../SlugComponents/SlugAlbums'
import SlugPlaylists from '../SlugComponents/SlugPlaylists'
import SlugRadio from '../SlugComponents/SlugRadio'
import UserMadeEmpty from './UserMadeEmpty'
import UserMadePlaylistsFilter from './UserMadePlaylistsFilter'

export default function UserMadePlaylistsMainLayout({userCreatedPlaylistId}) {
  const playlists = userCreatedPlaylist((state)=>state.playlists)
  const playlist = playlists.find((val)=>
    val.userCreatedPlaylistId === Number(userCreatedPlaylistId)
  )
  
  // const filteredItems = type === 'all' ? playlist?.playlistItems : playlist?.playlistItems?.filter((val)=>val.type === type)

  console.log('playlist items: ', playlist?.playlistItems)
  return (
    <div className='w-full p-5 lg:p-10 '>

      {/* /////if there's no item added */}
      {playlist?.playlistItems?.length > 0 && (       
  <UserMadePlaylistsFilter userCreatedPlaylistId={userCreatedPlaylistId} />
      ) }
      {playlist?.playlistItems?.length === 0 && (       
  <UserMadeEmpty/>
      ) }

      <UserMadePlaylistMainGrid>
      {/* {tracks} */}
      {(playlist?.playlistItems?.length > 0 && 
        playlist?.playlistItems.some((val)=>val.type === 'track')
      ) && <UserMadePlaylistsTitle topic='tracks'/>}
      { playlist?.playlistItems.map((val)=>(
        val.type === 'track' && (
          <SlugTracks key={val.id} trackName={val.trackName} artist={val.artist} album={val.album} src={val.src} id={val.id} albumId={val.albumId} artistId={val.artistId} />
        )
      ))}

       {/* {albums} */}
       {(playlist?.playlistItems?.length > 0 && 
        playlist?.playlistItems.some((val)=>val.type === 'album')
      ) && <UserMadePlaylistsTitle topic='albums'/>}
      { playlist?.playlistItems.map((val)=>(
        val.type === 'album' && (
          <SlugAlbums key={val.id} cover={val.cover} albumTitle={val.albumTitle} artist={val.artist} position={val.position} id={val.id} />
        )
      ))}

      {/* {playlists} */}
       {(playlist?.playlistItems?.length > 0 && 
        playlist?.playlistItems.some((val)=>val.type === 'playlist')
      ) && <UserMadePlaylistsTitle topic='playlists'/>}
      { playlist?.playlistItems.map((val)=>(
        val.type === 'playlist' && (
          <SlugPlaylists key={val.id} playlistTitle={val.playlistTitle} picture={val.picture} user={val.user} count={val.count} bgColor={val.bgColor} id={val.id}  />
        )
      ))}

      {/* {radio} */}
       {(playlist?.playlistItems?.length > 0 && 
        playlist?.playlistItems.some((val)=>val.type === 'radio')
      ) && <UserMadePlaylistsTitle topic='radios'/>}
      { playlist?.playlistItems.map((val)=>(
        val.type === 'radio' && (
          <SlugRadio key={val.id} picture={val.picture} radioTitle={val.radioTitle} id={val.id}  />
        )
      ))}

    </UserMadePlaylistMainGrid>
    </div>
  )
}
