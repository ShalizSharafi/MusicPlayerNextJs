 import Link from 'next/link'
import React from 'react'

export default function ContentHero({src,title,bgColor,artistName,year,count,duration,type,topic,artistId}) {

    const isArtist = type === 'artist' /// this way this wouldn't confuse the artistName prop for other heroContent since we only want the background image(actual image ) for the artist hero 
    const backgroundStyle = isArtist
    ? {
        backgroundImage: `linear-gradient(to bottom, transparent, ${bgColor}), url("${src}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {
        backgroundImage: `linear-gradient(to bottom left, ${bgColor}, ${bgColor}, transparent)`,
      }

  return (
    <div className='w-full flex flex-wrap rounded-[5px] py-2.5 lg:py-0 mt-12' style={ backgroundStyle}>
      <figure className='w-42 lg:w-52 h-42 lg:h-52 flex items-center justify-center'>
       <img className='w-2/3 h-2/3 object-cover rounded-xs' src={src} alt={title} />
      </figure>
      <div className='w-full gap-2.5 lg:w-[calc(100%-208px)] justify-start flex flex-wrap content-start  p-5'>
       <span className='text-white font-normal text-start w-full flex items-center justify-start capitalize'>{type}</span>
      { isArtist ? (<h2 className='text-3xl lg:text-5xl text-white capitalize flex w-full items-center justify-start text-start font-bold'>{artistName}</h2>) : (<h2 className='text-3xl lg:text-5xl text-white capitalize flex w-full items-center justify-start text-start font-bold'>{title}</h2>) }
       <ul className='w-full  flex items-center justify-start gap-2.5 *:text-xs *:lg:text-[15px] *:hover:text-white *:duration-400 '>
              {artistName && (
                     <li className='text-white/70 capitalize gap-2.5 flex items-center'><figure className='w-5 h-5 rounded-full flex items-center  justify-center  overflow-hidden'>
                     <img src={src} alt={artistName} className='w-full h-full object-cover' />
                     </figure><Link href={`/artist/${artistId}/top?limit=20`} >{artistName}</Link></li>
              )}
              {year && <li className='text-white/70 capitalize flex items-center  '>{year}</li>}
             {count !== undefined && <li className='text-white/70 capitalize flex items-center  '>{count} {topic} </li>}
             {duration && <li className='text-white/70  flex items-center '>{duration} min</li>}
       </ul>
      </div>
    </div>
  )
}