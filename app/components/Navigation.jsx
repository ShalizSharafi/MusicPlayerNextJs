// import React from 'react'
// import Link from 'next/link'
// export default function Navigation() {
//   return (
//     <nav className='hidden lg:flex lg:w-6/16 items-center'>
//       <ul className='w-full flex items-center justify-end h-1/2 '>
//        <li className='flex px-2.5 group hover:*:text-white items-center justify-center'>
//               <Link href='/premium' className='text-white/75  group-hover:scale-105 duration-400 font-bold capitalize'>premium</Link>
//        </li>

//        <li className='flex px-2.5 group hover:*:text-white items-center justify-center'>
//               <Link href='/support' className='text-white/75  group-hover:scale-105 duration-400 font-bold capitalize'>support</Link>
//        </li>

//        <li className='flex pl-2.5 pr-8 group hover:*:text-white items-center justify-center relative after:absolute after:h-full after:w-[0.5px] after:right-0 after:top-0 after:bg-white'>
//               <Link href='/download' className='text-white/75 group-hover:scale-105 duration-400  font-bold capitalize'>download</Link>
             
//        </li>

//         <li className='flex px-2.5 group hover:*:text-white items-center justify-center'>
//               <Link href='/download' className='text-white/75 group-hover:scale-105 text-[12px] duration-400  font-bold capitalize'>Install App</Link>
//        </li>
//       </ul>
//     </nav>
//   )
// }


"use client";

import React from 'react';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const items = [
  { label: 'premium', href: '/premium' },
  { label: 'support', href: '/support' },
  { label: 'download', href: '/download', divider: true },
  { label: 'Install App', href: '/download', small: true },
];

export default function Navigation() {
  return (
    <nav className='hidden lg:flex lg:w-6/16 items-center'>
      <Box
        component='ul'
        sx={{
          m: 0,
          p: 0,
          listStyle: 'none',
          width: '100%',
          height: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {items.map(({ label, href, divider, small }) => (
          <Box
            component='li'
            key={label}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              pl: '10px',
              pr: divider ? '32px' : '10px',
              '&:hover a': { color: '#fff', transform: 'scale(1.05)' },
              ...(divider && {
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  height: '100%',
                  width: '0.5px',
                  bgcolor: '#fff',
                },
              }),
            }}
          >
            <Link
              component={NextLink}
              href={href}
              underline='none'
              sx={{
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                fontSize: small ? '12px' : 'inherit',
                transition: 'all 400ms',
              }}
            >
              {label}
            </Link>
          </Box>
        ))}
      </Box>
    </nav>
  );
}