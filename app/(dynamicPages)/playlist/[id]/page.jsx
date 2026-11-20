import getDeezer from '@/app/Api/deeze'
import { fallbackColor } from '@/app/colors/genreColors'
import { playlistColors } from '@/app/colors/playlistColors'
import ContentLayout from '@/app/components/ContentLayout/ContentLayout'
import formatTime from '@/app/components/RadioComponents/Format'
import Playlist from '@/app/components/RadioComponents/Playlist'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import React from 'react'


async function DynamicPlaylist({params}){
       const {id} = await params
       const playlist = await getDeezer(`playlist/${id}`)
       if (!playlist || playlist.error) {
  throw new Error(`playlist id=${id} failed: ${JSON.stringify(playlist)}`)
}
       if(playlist.error) notFound()

        

       return(
              <ContentLayout src={playlist.picture} title={playlist.title} bgColor={playlistColors[playlist.id] ?? fallbackColor} artistName={playlist.creator?.name} count={playlist.nb_tracks} topic='tracks' year={playlist.creation_date?.slice(0,4)} duration={formatTime(playlist.duration)} artistId={playlist?.creator.id} type={playlist.type}>
                     <Playlist playlist={playlist.tracks?.data ?? []} />
              </ContentLayout>
       )
}

export default function page({params}) {
  return (
    <Suspense>
      <DynamicPlaylist params={params}/>
    </Suspense>
  )
}
