import React from 'react'
import ListContent from '../ContentLayout/ListContent'
import formatTime from './Format'
import { trace } from 'next/dist/trace'

// const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

export default function Playlist({playlist=[]}) {

       const shortenTheTitle = (text)=>{
                     const words = text.split('')
                     if(words.length <= 30) return text
                     return words.slice(0,29).join('') + '...' 
              }
  return (
    <ul className='w-full flex-wrap mt-5 flex gap-2.5'>
      {playlist.map((val,i)=>{
       return(
              <ListContent key={`${val.id}-${i}`} title={shortenTheTitle(val.title_short)} picture={val.album.cover_small}
              time={formatTime(val.duration)} index={i+1} id={val.id} preview={val.preview} tracks={playlist} track={val}/>
       )
      })}
    </ul>
  )
}
