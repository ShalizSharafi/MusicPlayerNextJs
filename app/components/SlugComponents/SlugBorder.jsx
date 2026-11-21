import React from 'react'
import SlugTitles from './SlugTitles'

export default function SlugBorder({children,topic,bgColor}) {
  return (
    <div className={`w-full  px-5 flex-wrap flex ${topic === 'tracks' ? 'py-10' : 'py-8'}`} style={
  topic === 'tracks'
    ? { background: `linear-gradient(to bottom, ${bgColor}, black, black, black, transparent)` }
    : undefined
}>
     <SlugTitles topic={topic}/>
     <div className={`grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 pt-5 lg:pt-8 gap-5 ${topic === 'artists' ? 'grid-cols-4 md:grid-cols-5 xl:grid-cols-7 gap-8' : 'grid-cols-2 md:grid-cols-4 xl:grid-cols-5'}`}> 
      {children}
     </div>
    </div>
  )
}


