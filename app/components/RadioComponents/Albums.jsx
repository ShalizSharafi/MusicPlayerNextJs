import React from 'react'
import ListContent from '../ContentLayout/ListContent'
import formatTime from './Format'

export default function Albums({album=[]}) {
  return (
    <div className='w-full flex-wrap mt-5 flex gap-2.5 border'>
       {album.map((a,i)=>{
              return(
                     <ListContent key={`${a.id}-${i}`} time={formatTime(a.duration)} title={a.title_short} picture={a.album.cover} id={a.id} index={i+1} preview={a.preview} />
              )
       })}
    </div>
  )
}

