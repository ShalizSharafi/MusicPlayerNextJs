'use client'

import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import userCreatedPlaylist from '@/app/store/UserCreatedPlaylist'

export default function RemovePlaylistItem({userCreatedPlaylistId,itemId,itemType,playlistOnly}) {
  const removePlaylistItem = userCreatedPlaylist(
    (state) => state.removePlaylistItem
  )

  const removePlaylist = userCreatedPlaylist((state)=>state.removePlaylist)
  return (
    <IconButton
      onClick={(e) => {
       e.preventDefault()
  e.stopPropagation()
  if(playlistOnly){
       removePlaylist(userCreatedPlaylistId)
  }else{
  removePlaylistItem(userCreatedPlaylistId, itemId, itemType)
  }
}}
      sx={{
        color: 'white',
        width: 24,
        height: 24
      }}
    >
      <DeleteOutlinedIcon sx={{fontSize: 18}} />
    </IconButton>
  )
}