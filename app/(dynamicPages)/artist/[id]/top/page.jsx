import getDeezer from '@/app/Api/deeze'
import ContentLayout from '@/app/components/ContentLayout/ContentLayout'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'
import Artist from '@/app/components/RadioComponents/Artist'
import { trackColors } from '@/app/colors/trackColors'
import { fallbackColor } from '@/app/colors/genreColors'

export async function DynamicArtist({params,searchParams}){

       const {id} = await params
       const {limit = '30'} = await searchParams
       const artist = await getDeezer(`artist/${id}`)
       const popularTracks = await getDeezer(`artist/${id}/top?limit=${limit}`)
       console.log('popularTracks:', popularTracks)
console.log('is array:', Array.isArray(popularTracks))
       const popularAlbums = await getDeezer(`artist/${id}/albums?limit=${limit}`)
       if(artist.error) notFound()

       return(
              <ContentLayout src={artist.picture} bgColor={trackColors[artist.id] ?? fallbackColor}  artistName={artist.name} type={artist.type} count={artist.nb_fan} topic='fans' artistId={artist.id}>
                     <Artist popularTracks={popularTracks} popularAlbums={popularAlbums}/>
              </ContentLayout>
       )
}


export default function page({params, searchParams}) {
  return (
    <Suspense>
       <DynamicArtist params={params} searchParams={searchParams}/>
    </Suspense>
  )
}
