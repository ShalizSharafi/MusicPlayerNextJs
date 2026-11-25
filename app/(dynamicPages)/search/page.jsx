import getDeezer from '@/app/Api/deeze'
import SearchHero from '@/app/components/searchLayout/SearchHero'
import SearchLayout from '@/app/components/searchLayout/SearchLayout'
import SearchTitle from '@/app/components/searchLayout/SearchTitle'
import SlugAlbums from '@/app/components/SlugComponents/SlugAlbums'
import SlugArtists from '@/app/components/SlugComponents/SlugArtists'
import SlugPlaylists from '@/app/components/SlugComponents/SlugPlaylists'
import SlugRadio from '@/app/components/SlugComponents/SlugRadio'
import SlugTracks from '@/app/components/SlugComponents/SlugTracks'
import React, { Suspense } from 'react'

export async function SearchContent({searchParams}) {
  const {q,type='all'} = await searchParams
  console.log(q, type)

  let results

  if(type === 'artist'){
    results = await getDeezer(`search/artist?q=${encodeURIComponent(q)}`)
  }else if(type === 'album'){
    results = await getDeezer(`search/album?q=${encodeURIComponent(q)}`)
  }else if(type === 'radio'){
    results = await getDeezer(`search/radio?q=${encodeURIComponent(q)}`)
  }else if(type === 'playlist'){
    results = await getDeezer(`search/playlist?q=${encodeURIComponent(q)}`)
  }else if(type === 'all'){
    const tracks = await getDeezer(`search?q=${encodeURIComponent(q)}`)
    const artists = await getDeezer(`search/artist?q=${encodeURIComponent(q)}`)
    const album = await getDeezer(`search/album?q=${encodeURIComponent(q)}`)
    const radio = await getDeezer(`search/radio?q=${encodeURIComponent(q)}`)
    const playlist = await getDeezer(`search/playlist?q=${encodeURIComponent(q)}`)
       console.log('ALL RESULTS:', {
  artists,
  album,
  tracks,
  radio,
  playlist
})
    results = {artists,album,tracks,radio,playlist}
    
  }else{
    results = await getDeezer(`search?q=${encodeURIComponent(q)}`)
  }

  return (
    <>
      <SearchHero q={q}/>
      <SearchTitle topic={type}/>

      <SearchLayout results={results} type={type}>

        {type === 'all' ? (
          <>
            { results?.artists?.length > 0 && <SearchTitle topic="artists" />}

{results.artists.map((result, i) => (
  <SlugArtists
    key={`${result.id}-${i}`}
    src={result.picture_medium}
    artistName={result.name}
    id={result.id}
  />
))}

{results?.tracks?.length > 0 &&  <SearchTitle topic="tracks" />}

{results.tracks.map((result, i) => (
  <SlugTracks
    key={`${result.id}-${i}`}
    trackName={result.title}
    artist={result.artist.name}
    album={result.album.title}
    src={result.album.cover_medium}
    id={result.id}
    albumId={result.album.id}
    artistId={result.artist.id}
  />
))}

{results?.album?.length > 0 &&  <SearchTitle topic="albums" />}

{results.album.map((result, i) => (
  <SlugAlbums
    key={`${result.id}-${i}`}
    cover={result.cover_medium}
    albumTitle={result.title}
    id={result.id}
  />
))}

{results?.radio?.length > 0 &&  <SearchTitle topic="radio" />}

{results.radio.map((result, i) => (
  <SlugRadio
    key={`${result.id}-${i}`}
    picture={result.picture_medium}
    radioTitle={result.title}
    id={result.id}
  />
))}

  {results?.playlist?.length > 0 && <SearchTitle topic="playlists" />}

{results.playlist.map((result, i) => (
  <SlugPlaylists
    key={`${result.id}-${i}`}
    picture={result.picture_medium}
    playlistTitle={result.title}
    user={result.user?.name}
    count={result.nb_tracks}
    id={result.id}
  />
))}
          </>
        ) : (
          <>
            {results.map((result,i) => {

              if (type === 'artist') {
                return (
                  <SlugArtists
                    key={`${result.id}-${i}`}
                    src={result.picture_medium}
                    artistName={result.name}
                    id={result.id}
                  />
                )
              }

              if (type === 'album') {
                return (
                  <SlugAlbums
                    key={`${result.id}-${i}`}
                    cover={result.cover_medium}
                    albumTitle={result.title}
                    id={result.id}
                  />
                )
              }

              if (type === 'radio') {
                return (
                  <SlugRadio
                    key={`${result.id}-${i}`}
                    picture={result.picture_medium}
                    radioTitle={result.title}
                    id={result.id}
                  />
                )
              }

              if (type === 'playlist') {
                return (
                  <SlugPlaylists
                    key={`${result.id}-${i}`}
                    picture={result.picture_medium}
                    playlistTitle={result.title}
                    user={result.user?.name}
                    count={result.nb_tracks}
                    id={result.id}
                  />
                )
              }

              return (
                <SlugTracks
                  key={`${result.id}-${i}`}
                  trackName={result.title}
                  artist={result.artist.name}
                  album={result.album.title}
                  src={result.album.cover_medium}
                  id={result.id}
                  albumId={result.album.id}
                  artistId={result.artist.id}
                />
              )
            })}
          </>
        )}

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