import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

export default function PlayBtn({isPlaying}) {
  return (
    <>
      {isPlaying ? (
        <PauseIcon
          sx={{
            color: 'white',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      ) : (
        <PlayArrowIcon
          sx={{
            color: 'white',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      )}
    </>
  )
}