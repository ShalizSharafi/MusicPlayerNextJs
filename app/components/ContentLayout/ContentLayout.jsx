import React from 'react'
import ContentHero from './ContentHero'

export default function ContentLayout({children,src,title,bgColor,artistName,count,topic,year,duration,type, artistId}) {
  return (
    <section className='w-full flex flex-wrap p-5 lg:p-10'>
   
      <ContentHero src={src} title={title} bgColor={bgColor} artistName={artistName} count={count} topic={topic} year={year} duration={duration} type={type} artistId={artistId}/>

      {children}
     
    </section>
  )
}
