import React from 'react'
import getDeezer from './Api/deeze'
import GenreCards from './components/homeComponents/GenreCards'
import { fallbackColor, genreColors } from './colors/genreColors'




export default async function page() {
  const temp = await getDeezer('genre')
  const genres = temp.filter((g)=> g.id !== 0 && g.id !== 81)
  return (
       <>
        <div className='w-full mt-20 flex items-center justify-start py-5 px-5 lg:px-10'>
          <h2 className='text-white text-3xl text-start font-bold flex items-center justify-start w-full '>Brows All Genres</h2>
        </div>
      <div className='p-5 lg:p-10 w-full gap-5 flex flex-wrap items-center justify-center'>
        {genres.map((val)=>{
          return(
            <GenreCards key={val.id} src={val.picture_small} genre={val.name} bgColor={genreColors[val.id]?? fallbackColor} href={`/${val.id}`} />
          )
        })}
      </div>
       </>
  )
}
