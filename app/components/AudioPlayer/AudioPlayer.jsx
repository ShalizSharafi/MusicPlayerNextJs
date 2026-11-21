'use client'

import usePlayerStore from '@/app/store/PlayerStore'
// import { Handlee } from 'next/font/google'
import React, { useEffect, useRef } from 'react'
import Slider from '@mui/material/Slider'
import shortenTheTitle from '../SlugComponents/ShortenTitle'
import Link from 'next/link'

export default function AudioPlayer() {
       const audioRef = useRef(null)
       // const preview = usePlayerStore(state=>state.preview) 

       const setAudio = usePlayerStore(state=>state.setAudio)
       // const setIsPlaying = usePlayerStore(state => state.setIsPlaying)
       const setCurrentTime = usePlayerStore(state => state.setCurrentTime)
       const setDuration = usePlayerStore(state => state.setDuration)
       const currentTime = usePlayerStore(state => state.currentTime)
        const duration = usePlayerStore(state => state.duration)
        const currentTrackId = usePlayerStore(state => state.currentTrackId)
        ////for the play btn
        const playTrack = usePlayerStore(state=>state.playTrack)
        const preview = usePlayerStore(state=>state.preview)
       const isPlaying = usePlayerStore(state=>state.isPlaying)
       const nextTrack = usePlayerStore(state=>state.nextTrack)
       const previousTrack = usePlayerStore(state=>state.previousTrack)
        
       ////for the prev and next
       const tracks = usePlayerStore(state=>state.tracks)
       const currentTrack = tracks.find(track => track.id === currentTrackId)

       console.log('player tracks:', tracks)

       useEffect(()=>{
              setAudio(audioRef.current)
       },[setAudio])

       useEffect(() => {
  const audio = audioRef.current
  if (!audio) return

  const handleTimeUpdate = () => {
    setCurrentTime(audio.currentTime)
  }
  const handleLoadedMetadata = () => {
  setDuration(audio.duration)
}

  audio.addEventListener('loadedmetadata', handleLoadedMetadata)
  audio.addEventListener('timeupdate', handleTimeUpdate)
  return () => {
       audio.removeEventListener('timeupdate', handleTimeUpdate)
    audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
  }
}, [setCurrentTime,setDuration])

       // useEffect(()=>{
       //       if(preview) audioRef.current.src = preview
       //       console.log(audioRef.current.src)
       //       audioRef.current.play()
       // },[preview])

       // useEffect(()=>{
       //        if(!audioRef.current) return

       //        if(isPlaying){
       //               audioRef.current.play().catch(()=>{}) //The .catch(() => {}) prevents the rejected play() promise from producing that ugly console error when a play request gets interrupted.
       //        }else{
       //               audioRef.current.pause()
       //        }

       // },[isPlaying])

       useEffect(()=>{
              const audio = audioRef.current
              if(!audio) return

              const handleEnded = ()=>{
                    nextTrack()
              }
              audio.addEventListener('ended',handleEnded)
              return ()=> audio.removeEventListener('ended',handleEnded)
              },[])


              const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

// if (!currentTrackId) return null
 return (
  <>
    <audio ref={audioRef} /> 
{/* //This is the actual audio player that the browser uses. */}
{/* we can't see it because we aren't giving it any visible controls. */}

    {currentTrackId && ( //it only shows the seekbar when we click a track
      <div className="fixed bottom-20 p-5 left-0 w-full  lg:ml-[25%] lg:w-3/4 flex flex-wrap gap-5 z-50 bg-black ">
       <div className='w-full gap-5  flex items-center justify-between lg:justify-around *:w-1/3 '>
              <Link  href={`/track/${currentTrackId}`} className='text-white/75 text-xs lg:text-[14px] capitalize font-normal'> {currentTrack?.title && shortenTheTitle(currentTrack.title)}</Link>
                    <div className='flex items-center gap-2.5 justify-center'>
                      <button onClick={previousTrack} className='text-white/50 hover:text-white duration-400 text-xl lg:text-2xl w-5 h-5 cursor-pointer flex items-center justify-center  '>
                  ◀
             </button>

              <button onClick={()=>playTrack(currentTrackId,preview)} className='text-white/50 hover:text-white duration-400 text-xl lg:text-2xl w-5 h-5 cursor-pointer flex items-center justify-center  rounded-full'>{isPlaying ? '❚❚' : '▶'}</button>

              <button  onClick={nextTrack} className='text-white/50 hover:text-white duration-400 text-xl lg:text-2xl w-5 h-5 cursor-pointer flex items-center justify-center  '>
              ▶
             </button>
                    </div>
             <Link  href={`/artist/${currentTrack?.artist?.id}/top?limit=20`} className='text-white/75 text-xs lg:text-[14px] capitalize font-normal text-end'>{currentTrack?.artist?.name}</Link>
       </div>
        <div className="flex w-full items-center gap-3">
          <span className="text-white/50 text-xs lg:text-[14px]">
            {formatTime(currentTime)}
          </span>

          <Slider
             sx={{
    color: 'white',
    '& .MuiSlider-track': {
      height: 3,
    },
    '& .MuiSlider-rail': {
      height: 3,
    },
    '& .MuiSlider-thumb': {
      width: 10,
      height: 10,
    },
  }}
            value={currentTime}
            max={duration}
            onChange={(event, value) => {
              audioRef.current.currentTime = value
              setCurrentTime(value)
            }} //This happens when you manually drag/click the seek bar
          />
          <span className="text-white/50 text-xs lg:text-[14px]">
            {formatTime(duration)}
          </span>
        </div>
      </div>
    )}
  </>
)
}
