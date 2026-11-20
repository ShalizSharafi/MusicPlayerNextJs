import React from 'react'

export default function SlugTitles({topic}) {
      
  return (
    <div className={`w-full flex items-center justify-start ${topic === 'tracks' ? 'py-5 lg:py-10' :''}`}>
      <h3 className='text-white font-medium text-[16px] lg:text-xl capitalize'>Discover new {topic} </h3>
    </div>
  )
}
