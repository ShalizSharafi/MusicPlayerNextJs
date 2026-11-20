import getDeezer from '@/app/Api/deeze'
import { fallbackColor } from '@/app/colors/genreColors'
import { trackColors } from '@/app/colors/trackColors'
import ContentLayout from '@/app/components/ContentLayout/ContentLayout'
import formatTime from '@/app/components/RadioComponents/Format'
import Tracks from '@/app/components/RadioComponents/Tracks'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'


async function DynamicTracks({params}){
       const {id} = await params
       const track = await getDeezer(`track/${id}`)
       console.log('id:', id, 'track:', track)
       if(track.error) notFound()

       return(
        <ContentLayout src={track.album?.cover} title={track.title} bgColor={trackColors[track.id] ?? fallbackColor} artistName={track.artist.name} count={track.rank} topic='of all' year={track.release_date.slice(0,4)} duration={formatTime(track.duration)} artistId={track.artist.id} type={track.type}>
          <Tracks track={track}/>
        </ContentLayout>
       )
}


export default function page({params}) {
  return (
    <Suspense fallback={<p>is loading....</p>}>
      <DynamicTracks params={params}/>
    </Suspense>
  )
}
