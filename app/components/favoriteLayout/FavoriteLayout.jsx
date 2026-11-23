import React from 'react'

export default function FavoriteLayout({children}) {
  return (
       <>
    <div className={`w-full p-5 lg:p-10 grid md:grid-cols-4 xl:grid-cols-5 pt-5 lg:pt-8 gap-5 grid-cols-2`}>
      {children}
    </div>
       </>
  )
}
