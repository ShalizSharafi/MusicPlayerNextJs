'use client'

import usePlayerStore from '@/app/store/PlayerStore'
// import { Handlee } from 'next/font/google'
import React, { useEffect, useRef } from 'react'
import Slider from '@mui/material/Slider'

export default function AudioPlayer() {
       const audioRef = useRef(null)
       // const preview = usePlayerStore(state=>state.preview) 
       // const isPlaying = usePlayerStore(state=>state.isPlaying)
       const setAudio = usePlayerStore(state=>state.setAudio)
       const setIsPlaying = usePlayerStore(state => state.setIsPlaying)
       const setCurrentTime = usePlayerStore(state => state.setCurrentTime)
       const setDuration = usePlayerStore(state => state.setDuration)

       const currentTime = usePlayerStore(state => state.currentTime)
        const duration = usePlayerStore(state => state.duration)
        const currentTrackId = usePlayerStore(state => state.currentTrackId)

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
                    setIsPlaying(false)
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

    {currentTrackId && (
      <div className="fixed bottom-20 p-5 left-0 w-full bg-black lg:ml-[25%] lg:w-3/4 z-50">
        <div className="flex items-center gap-3">
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
            }}
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
