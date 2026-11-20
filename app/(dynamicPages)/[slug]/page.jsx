import React, { Suspense } from 'react'
import { fallbackColor, genreColors } from '@/app/colors/genreColors'
import { notFound } from 'next/navigation'
import SlugLayout from '@/app/components/SlugComponents/SlugLayout'
import getDeezer, { getChart } from '@/app/Api/deeze'

async function Dynamicpage({params}){
       const {slug} = await params
       // console.log('slug:', slug)
       if (!/^\d+$/.test(slug)) notFound()
       const chart = await getChart(slug)
       const radio = await getDeezer('radio')

       // const res = await fetch(`https://api.deezer.com/genre/${slug}/`)
    
       // const data = await res.json()

       /////new way:
       const data = await getDeezer(`genre/${slug}`)
       // console.log('slug:', slug, 'data:', data)
       if(data.error) notFound()

              // console.log('slug:', slug)
// console.log('chart keys:', Object.keys(chart))
       return(
             <>
              <SlugLayout name={data.name} bgColor={genreColors[data.id] ?? fallbackColor} tracks={chart.tracks?.data ?? []} artists={chart.artists?.data ?? []} albums={chart.albums?.data ?? []} playlists={chart.playlists?.data ?? []} radio={radio}  />
             </>
       )

}

export default function page({params}) {
  return (
   <Suspense fallback={<p>is loading</p>}>
       <Dynamicpage params={params} />
   </Suspense>
  )
}

