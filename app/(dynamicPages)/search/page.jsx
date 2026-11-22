import getDeezer from '@/app/Api/deeze'
import SearchHero from '@/app/components/searchLayout/SearchHero'
import SearchLayout from '@/app/components/searchLayout/SearchLayout'
import SearchTitle from '@/app/components/searchLayout/SearchTitle'
import SlugAlbums from '@/app/components/SlugComponents/SlugAlbums'
import SlugArtists from '@/app/components/SlugComponents/SlugArtists'
import SlugPlaylists from '@/app/components/SlugComponents/SlugPlaylists'
import SlugRadio from '@/app/components/SlugComponents/SlugRadio'
import SlugTracks from '@/app/components/SlugComponents/SlugTracks'
import shortenTheTitle from '@/app/components/SlugComponents/ShortenTitle'
import React, { Suspense } from 'react'

export async function SearchContent({searchParams}) {
       const {q} = await searchParams //read the searchquery from the url
       const results = await getDeezer(`search?q=${encodeURIComponent(q)}`)

  return (
     <>
       <SearchHero/>
      <SearchTitle topic='Tracks'/>
    <SearchLayout>
       {results.map((result)=>{
       return(
              <SlugTracks key={result.id} trackName={result.title}
    artist={result.artist.name}
    album={result.album.title}
    src={result.album.cover_medium}
    id={result.id}
    albumId={result.album.id}
    artistId={result.artist.id}/>
       )
     })}
    </SearchLayout>


     <SearchTitle topic='Albums'/>
    <SearchLayout>
       {results.map((each)=>{
       return(
              <SlugAlbums key={each.id} albumTitle={shortenTheTitle(each.title)} artist={each.artist.name} position={each.position} cover={each.cover} id={each.id}/>
       )
     })}
    </SearchLayout>

     <SearchTitle topic='Artists'/>
    <SearchLayout>
      {results.map((person)=>{
       return(
              <SlugArtists key={person.id} src={person.picture} artistName={person.name} id={person.id}/>
       )
      })}
    </SearchLayout>


     <SearchTitle topic='Playlists'/>
    <SearchLayout>
       {results.map((pl)=>{
       return(
              <SlugPlaylists key={pl.id} playlistTitle={pl.title} picture={pl.picture} user={pl.user.name} count={pl.nb_tracks} id={pl.id} bgColor={bgColor}/>
       )
     })}
    </SearchLayout>

     <SearchTitle topic='Radio'/>
    <SearchLayout>
      {results.map((r,index)=>{
       return(
              <SlugRadio key={`${r.id}-${index}`} radioTitle={r.title} bgColor={bgColor} picture={r.picture} id={r.id}/>
       )
      })}
    </SearchLayout>
     </>
  )
}


export default function page({searchParams}) {
  return (
    <Suspense fallback={<p>is loading</p>}>
       <SearchContent searchParams={searchParams}/>
    </Suspense>
  )
}
