
'use client'

import React from 'react'
import { Menu, MenuItem } from '@mui/material'
import userCreatedPlaylist from '@/app/store/UserCreatedPlaylist'
// import { useRouter } from 'next/navigation'

export default function PlaylistMenu({ anchorEl, open, onClose, playlists,item }) {
       const addPlaylistItem = userCreatedPlaylist(
  (state) => state.addPlaylistItem)
  const setPendingItem = userCreatedPlaylist((state) => state.setPendingItem)
  // const router = useRouter()
//   if (playlists.length === 0) {
//   setPendingItem(item)
//   router.push('/playlist/create')
//   return
// }
  return (
    
    <Menu
  anchorEl={anchorEl}
  open={open}
  onClose={onClose}
  slotProps={{
    paper: {
      sx: {
        mt: 1,
        minWidth: 200,
        maxWidth: 260,
        maxHeight: 280,
        p: 0.75,
        borderRadius: '12px',
        backgroundColor: 'rgba(30, 30, 30, 0.96)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 12px 35px rgba(0,0,0,0.45)',
        overflowY: 'auto',

        '&::-webkit-scrollbar': {
          width: '5px',
        },

        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '10px',
        },

        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
      }
    }
  }}
>
  {playlists.map((playlist) => (
    <MenuItem
      key={playlist.userCreatedPlaylistId}
      onClick={() => {
        addPlaylistItem(playlist.userCreatedPlaylistId, item)
        onClose()
      }}
      sx={{
        minHeight: '42px',
        px: 1.5,
        borderRadius: '8px',
        color: 'rgba(255,255,255,0.85)',
        fontSize: '14px',
        fontWeight: 500,
        transition: 'all 0.2s ease',

        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: 'white',
        },

        '&:active': {
          backgroundColor: 'rgba(255,255,255,0.15)',
        },
      }}
    >
      {playlist.title}
    </MenuItem>
  ))}
</Menu>
  )
}

