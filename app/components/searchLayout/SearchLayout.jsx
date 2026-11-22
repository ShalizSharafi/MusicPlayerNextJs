import React from 'react'
import SlugTitles from '../SlugComponents/SlugTitles'

export default function SearchLayout({children}) {
  return (
       <>
    <div className='w-full flex-wrap p-5 lg:p-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 pt-5 lg:pt-8 gap-5'>
      {children}
    </div>
       </>
  )
}
