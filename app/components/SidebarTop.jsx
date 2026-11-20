// import React from 'react'
// import Link from 'next/link'

// export default function SidebarTop() {
//   return (
//      <div className='w-full p-5 flex items-center'>
//        <div className='w-1/2  flex items-center justify-start'>
//        <p className='text-white text-[16px] font-bold capitalize'>your library</p>
//        </div>
//        <ul className='w-1/2  flex items-center justify-end '>
//        <li className='px-2.5 py-1 group bg-bareBlack/50 rounded-3xl flex justify-center items-center '><Link href='' className='w-full flex items-center gap-2.5'>
//        <i className=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className='size-6'><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg></i>
//        <span className='text-white/50 capitalize font-bold group-hover:text-white duration-400'>Create</span>
//        </Link></li>
//        </ul>
//       </div>
//   )
// }

"use client";

import React from 'react';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';

export default function SidebarTop() {
  return (
    <div className='w-full p-5 flex items-center'>
      <div className='w-1/2 flex items-center justify-start'>
        <Typography
          sx={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}
        >
          your library
        </Typography>
      </div>

      <Box
        component='ul'
        sx={{
          m: 0,
          p: 0,
          listStyle: 'none',
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          component='li'
          className='bg-bareBlack/50'
          sx={{
            px: '10px',
            py: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '24px',
            '&:hover .create-label': { color: '#fff' },
          }}
        >
          <Link
            component={NextLink}
            href='#'
            underline='none'
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <AddIcon sx={{ color: 'white', fontSize: 24 }} />
            <span
              className='create-label'
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                transition: 'color 400ms',
              }}
            >
              Create
            </span>
          </Link>
        </Box>
      </Box>
    </div>
  );
}
