// import React from 'react'
// import Link from 'next/link'

// export default function LoginLogout() {
//   return (
//       <div className='hidden lg:flex items-center lg:w-3/16'>
//        <ul className='flex w-full h-1/2 items-center justify-end'>
//                <li className='flex px-2.5 group hover:*:text-white items-center justify-center'>
//               <Link href='/Login' className='text-white/75  group-hover:scale-105 duration-400 font-bold capitalize'>sign up</Link>
//        </li> 
//        <li className='flex  px-2.5 group hover:*:text-black items-center justify-center bg-white rounded-2xl '>
//               <Link href='/Logout' className='text-black/75  group-hover:scale-105 duration-400 font-bold capitalize'>Login</Link>
//        </li>
//        </ul>
//       </div>
//   )
// }


"use client";

import React from 'react';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const items = [
  { label: 'sign up', href: '/Login' },
  { label: 'Login', href: '/Logout', filled: true },
];

export default function LoginLogout() {
  return (
    <div className='hidden lg:flex items-center lg:w-3/16'>
      <Box
        component='ul'
        sx={{
          m: 0,
          p: 0,
          listStyle: 'none',
          display: 'flex',
          width: '100%',
          height: '50%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {items.map(({ label, href, filled }) => (
          <Box
            component='li'
            key={label}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: '10px',
              ...(filled && { bgcolor: '#fff', borderRadius: '16px' }),
              '&:hover a': {
                color: filled ? '#000' : '#fff',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Link
              component={NextLink}
              href={href}
              underline='none'
              sx={{
                color: filled ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.75)',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                transition: 'all 400ms',
              }}
            >
              {label}
            </Link>
          </Box>
        ))}
      </Box>
    </div>
  );
}