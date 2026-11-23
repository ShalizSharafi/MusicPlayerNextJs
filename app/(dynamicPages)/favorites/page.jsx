'use client'
import FavoriteHero from '@/app/components/favoriteLayout/FavoriteHero'
import FavoriteLayout from '@/app/components/favoriteLayout/FavoriteLayout'
import FavoriteTitle from '@/app/components/favoriteLayout/FavoriteTtile'
import SlugAlbums from '@/app/components/SlugComponents/SlugAlbums'
import SlugPlaylists from '@/app/components/SlugComponents/SlugPlaylists'
import SlugRadio from '@/app/components/SlugComponents/SlugRadio'
import SlugTracks from '@/app/components/SlugComponents/SlugTracks'
import useFavoriteStore from '@/app/store/FavoriteStore'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'


export function DynamicFavorites() {
       const favorites = useFavoriteStore((state)=>state.favorites) //this gives us access to zustand's fvorites array!
       const tracks = favorites.filter((item)=> item.type === 'track')
       const albums = favorites.filter((item)=> item.type === 'album')
       const playlists = favorites.filter((item)=> item.type === 'playlist')
       const radios = favorites.filter((item)=> item.type === 'radio')

       const searchParams = useSearchParams()
       const type = searchParams.get('type') || 'all' //type is either all or the 'type'
       console.log('favorites:',favorites)
  return (
       <>
       <FavoriteHero/>
       <FavoriteTitle topic={type} />
       <FavoriteLayout>
              {/* ///tracks */}
             {(type === 'all' || type === 'track') &&(
              <>
               <FavoriteTitle topic='tracks' />
              {tracks.map((item,i)=>{
                     return(
                           
                            <SlugTracks key={`${item.id}-${i}`} trackName={item.title} artist={item.artist} album={item.album} src={item.image} id={item.id} albumId={item.albumId} artistId={item.artistId} />
                            
                     )
              })}
              </>
             )}
              
               {/* ///albums */}
              {(type === 'all' || type === 'album') && (
                     <>
                      <FavoriteTitle topic='albums' />
              {albums.map((item,i)=>{
                     return(
                            
                            <SlugAlbums key={`${item.id}-${i}`} cover={item.cover} albumTitle={item.albumTitle} artist={item.artist} position={item.position} id={item.id} />
                            
                     )
              })}
                     </>
              )}

              {/* ///playlists */}
              {(type === 'all' || type === 'playlist') &&(
                     <>
                      <FavoriteTitle topic='playlists' />
              {playlists.map((item,i)=>{
                     return(
                            
                            <SlugPlaylists key={`${item.id}-${i}`} picture={item.picture} playlistTitle={item.playlistTitle} id={item.id} user={item.user} bgColor={item.bgColor} type={item.type} count={item.count}  />
                            
                     )
              })}
                     </>
              )}

              {/* ///radios */}
              {(type === 'all' || type === 'radio') &&(
                     <>
                      <FavoriteTitle topic='radios' />
              {radios.map((item,i)=>{
                     return(
                            
                            <SlugRadio key={`${item.id}-${i}`} type={item.type} picture={item.picture} radioTitle={item.radioTitle} id={item.id} />
                            
                     )
              })}
                     </>
              )}
       </FavoriteLayout>
       </>
  )
}




export default function page() {
  return (
    <Suspense fallback={<p>is loading ...</p>}>
       <DynamicFavorites />
    </Suspense>
  )
}
