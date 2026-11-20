import getDeezer from '@/app/Api/deeze'
import { fallbackColor, radioColors } from '@/app/colors/radioColors'
import ContentLayout from '@/app/components/ContentLayout/ContentLayout'
import Radio from '@/app/components/RadioComponents/Radio'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'

async function DynamicRadio({params}) {
       const {id} = await params
       const data = await getDeezer(`radio/${id}`)
       console.log('data: ', data)
       if(data.error) notFound()
  return (
    <ContentLayout src={data.picture} bgColor={radioColors[data.id] ?? fallbackColor} title={data.title} type={data.type} artistId={data.id} topic={data.type} >
      <Radio radio={data}/>
    </ContentLayout>
  )
}

export default function page({params}) {
  return (
   <Suspense fallback={<p>is loading</p>}>
     <DynamicRadio params={params}/>
   </Suspense>
  )
}
