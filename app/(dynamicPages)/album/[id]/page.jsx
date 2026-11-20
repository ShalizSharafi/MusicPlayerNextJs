import getDeezer from '@/app/Api/deeze'
import { albumColors } from '@/app/colors/albumColors'
import { fallbackColor } from '@/app/colors/genreColors'
import ContentLayout from '@/app/components/ContentLayout/ContentLayout'
import Albums from '@/app/components/RadioComponents/Albums'
import formatTime from '@/app/components/RadioComponents/Format'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'

 async function DynamicAlbums({params}) {
  const {id} = await params
  const album = await getDeezer(`album/${id}`)
  if(album.error) notFound()

  return (
    <ContentLayout src={album.cover} title={album.title} artistName={album.artist.name} count={album.fans} topic='fans' year={album.release_date.slice(0,4)} duration={formatTime(album.duration)} type={album.type} bgColor={albumColors[album.id] ?? fallbackColor} artistId={album.artist.id}>
      <Albums album={album.tracks?.data ?? []}/>
    </ContentLayout>
  )
}

export default function page({params}) {
  return (
    <Suspense>
      <DynamicAlbums  params={params}/>
    </Suspense>
  )
}
