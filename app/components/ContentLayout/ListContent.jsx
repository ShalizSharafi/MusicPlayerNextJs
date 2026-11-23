'use client'
import React, { useEffect } from 'react'
import PlayBtn from '../RadioComponents/PlayBtn'
import usePlayerStore from '@/app/store/PlayerStore'
import LikeSVG from './LikeSVG'
import useFavoriteStore from '@/app/store/FavoriteStore'
/////rows
export default function ListContent({title,picture,time,index,id,preview,tracks}) {

  const playTrack = usePlayerStore(state=>state.playTrack) //state isn't the properties themselves. It's the whole current Zustand store state,
  
  const isFavorite = useFavoriteStore((state)=>state.isFavorite(id,'track'))
  const toggleFavorites = useFavoriteStore((state)=>state.toggleFavorites)



  /////prev and next btns part
  const setTracks = usePlayerStore(state=>state.setTracks)
  useEffect(()=>{
    setTracks(tracks)
  },[tracks,setTracks]) //The useEffect makes sure Zustand gets the track list after the component renders, instead of updating the store during rendering.

  const currentTrackId = usePlayerStore(state=>state.currentTrackId)
  const isPlayingState = usePlayerStore(state=>state.isPlaying)
  const isPlaying = id === currentTrackId && isPlayingState //Then we can calculate whether this row is the active one:

  console.log(currentTrackId, preview)
  // id of this row === currentTrackId in Zustand → isPlaying is true → PlayBtn shows Pause.
 
  return (
    <ul  onClick={() => {
    // console.log('clicked:', id)
    playTrack(id,preview)
  }} className='w-full cursor-pointer justify-between flex items-center p-5 bg-bareGray/20 rounded-[10px] hover:bg-bareGray/40 duration-400 '>
      <div className='flex items-center gap-5'>
        <li className='text-white/50 font-normal text-xs lg:text-[15px]'>{index}</li>
      <li><figure className='w-8 h-8 relative rounded-xs flex items-center justify-center overflow-hidden'><img src={picture} alt={title} className='w-full h-full object-cover'/>
      <PlayBtn isPlaying={isPlaying}/>
      </figure></li>
      </div>
      <li className='text-white/80 hover:text-white duration-400 flex w-1/3 text-start justify-start items-center capitalize font-normal text-xs lg:text-[15px]'>{title}</li>
      <li onClick={(e)=>{
        e.stopPropagation()
        toggleFavorites({
         title,
         image: picture,
         time,
         index,
         id,
         preview,
         tracks,
         type:'track'
        })
      }} className='w-5 h-5 flex items-center justify-center'>
       <LikeSVG liked={isFavorite}/>
      </li>
      <li className='text-white/50 text-xs lg:text-[15px]'>{time}</li>
    </ul>
  )
}
