
'use client'

import React from 'react'
import { Menu, MenuItem } from '@mui/material'
import userCreatedPlaylist from '@/app/store/UserCreatedPlaylist'

export default function PlaylistMenu({ anchorEl, open, onClose, playlists,item }) {
       const addPlaylistItem = userCreatedPlaylist(
  (state) => state.addPlaylistItem)
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      slotProps={{
        sx: {
          backgroundColor: '#807E7A',
          color: 'white',
          borderRadius: '5',
          minWidth: '180px',
          maxHeight: '250px',
          mt: 6,
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
            fontSize: '14px',
            '&:hover': {
              backgroundColor: '#807E7A',
            }
          }}
        >
          {playlist.title}
        </MenuItem>
      ))}
    </Menu>
  )
}
