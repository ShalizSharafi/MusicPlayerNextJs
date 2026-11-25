'use client'

import React from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import userCreatedPlaylist from '@/app/store/UserCreatedPlaylist'

export default function RemovePlaylistItem({userCreatedPlaylistId,itemId,itemType}) {
  const removePlaylistItem = userCreatedPlaylist(
    (state) => state.removePlaylistItem
  )

  return (
    <IconButton
      onClick={(e) => {
  e.stopPropagation()
  console.log('REMOVE CLICKED')
  console.log(userCreatedPlaylistId, itemId, itemType)
  removePlaylistItem(userCreatedPlaylistId, itemId, itemType)
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