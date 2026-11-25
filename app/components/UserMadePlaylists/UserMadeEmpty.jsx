import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function UserMadeEmpty() {
       return(
             <Link href={`/playlist/create`} className='w-full'>
              <Card
    sx={{
      width: '100%',
      backgroundColor: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      color: 'white',
      borderRadius: '10px'
    }}
  >
    <CardContent
      sx={{
        minHeight: '220px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1
      }}
    >
      <LibraryMusicIcon sx={{ fontSize: 50, color: 'rgba(255,255,255,0.4)' }} />

      <Typography variant="h6">
        This playlist is empty
      </Typography>

      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>
        Add some tracks, albums, or playlists to get started.
      </Typography>
    </CardContent>
  </Card>
             </Link>
       )       
               
       
}
  

