// import React from 'react'
// import Link from 'next/link'
// export default function SidebarMiddle() {
//   return (
//     <div className='w-full border h-50 '>
//        <div className='w-full h-full overflow-scroll '>
//        <div className='p-5 row content-start gap-4 mb-10 bg-bareBlack'>
//               <h2 className='flex items-center justify-start text-start w-full text-white font-bold'>create your first playlist</h2>
//               <h3 className='flex items-center justify-start text-start w-full text-white font-normal'>It's easy, we'll help you</h3>
//               <Link href='' className='text-[16px] font-bold text-black bg-white px-4 rounded-2xl flex items-center justify-center hover:scale-105 duration-400 hover:text-bareBlack'>create playlist</Link>
//        </div>
//        <div className='p-5 row content-start gap-4 bg-bareBlack'>
//                <h2 className='flex items-center justify-start text-start w-full text-white font-bold'>create your first playlist</h2>
//               <h3 className='flex items-center justify-start text-start w-full text-white font-normal'>It's easy, we'll help you</h3>
//               <Link href='' className='text-[16px] font-bold text-black bg-white px-4 rounded-2xl flex items-center justify-center hover:scale-105 duration-400 hover:text-bareBlack'>create playlist</Link>
//        </div>
//        </div>
//     </div>
//   )
// }


"use client";

import React from 'react';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const cards = [
  { title: 'Listen to your favorite ones', text: "You've got a taste", label: 'Your Favorites',href:'/favorites' },
  { title: 'Listen to your playlists', text: "Nice collection by the way!", label: 'Your playlists',href:'/my-playlists' },
  { title: "Let's find some podcasts to follow", text: "We'll keep you updated on new episodes.", label: 'Browse podcasts',href:'#' }
  
];


function PlaylistCard({ title,text,label,sx,href }) {
  return (
    <Box
      className='row content-start gap-4 bg-bareBlack'
      sx={{ p: '20px', ...sx }}
    >
      <Typography
        component='h2'
        className='w-full'
        sx={{ color: 'white', fontWeight: 'bold', fontSize: 'inherit' }}
      >
        {title}
      </Typography>

      <Typography
        component='h3'
        className='w-full'
        sx={{ color: 'white', fontWeight: 'normal', fontSize: 'inherit' }}
      >
       {text}
      </Typography>

      <Button
        component={NextLink}
        href={href}
        disableElevation
        sx={{
          px: '16px',
          py: 0,
          fontSize: '13px',
          fontWeight: 'bold',
          textTransform: 'none',
          color: 'black',
          bgcolor: 'white',
          borderRadius: '16px',
          transition: 'all 400ms',
          '&:hover': {
            bgcolor: 'white',
            color: 'var(--color-bareBlack)',
            transform: 'scale(1.05)',
          },
        }}
      >
        {label}
      </Button>
    </Box>
  );
}

export default function SidebarMiddle() {
  return (
    <div className='w-full p-2 h-50'>
      <div className='w-full h-full flex flex-wrap overflow-scroll gap-5'>
       {cards.map((card)=>(
        <PlaylistCard key={card.title} title={card.title} text={card.text} label={card.label} href={card.href}/>
       ))}
      </div>
    </div>
  );
}