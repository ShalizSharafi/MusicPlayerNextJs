// import React from 'react'
// import Link from 'next/link'

// export default function SidebarBottom() {
//   return (
//     <div className='w-full  content-end row'>
//        <ul className="row  p-5 gap-2.5">
//               <li className='flex items-center justify-center p-1'>
//                      <Link href='' className='text-white text-xs capitalize'>legal</Link>
//               </li>
              
//               <li className='flex items-center justify-center p-1'>
//                      <Link href='' className='text-white text-xs capitalize'>safety&PrivacyCenter</Link>
//               </li>
              
//               <li className='flex items-center justify-center p-1'>
//                      <Link href='' className='text-white text-xs capitalize'>PrivacyPolicy</Link>
//               </li>
              
//               <li className='flex items-center justify-center p-1'>
//                      <Link href='' className='text-white text-xs capitalize'>cookies</Link>
//               </li>
              
//               <li className='flex items-center justify-center p-1'>
//                      <Link href='' className='text-white text-xs capitalize'>aboutAds</Link>
//               </li>
              
//               <li className='flex items-center justify-center p-1'>
//                      <Link href='' className='text-white text-xs capitalize'>accessibility</Link>
//               </li>
              
//               <li className='flex items-center justify-center p-1'>
//                      <Link href='' className='text-white text-xs capitalize'>Cookies</Link>
//               </li>
              
//        </ul>
//        <div className="row items-center justify-start p-5 ">
//        <span className='px-3 py-1 group bg-black border-[0.5px] border-white rounded-3xl flex justify-center items-center '><Link href='' className='w-full flex items-center gap-2.5'>
//        <i className='size-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg></i>
//        <span className='text-white text-[14px] capitalize font-bold group-hover:text-white duration-400'>English</span>
//        </Link></span>
//        </div>
//     </div>
//   )
// }
"use client";

import React from 'react';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LanguageIcon from '@mui/icons-material/Language';

const links = [
  'legal',
  'safety&PrivacyCenter',
  'PrivacyPolicy',
  'cookies',
  'aboutAds',
  'accessibility',
  'Cookies',
];

export default function SidebarBottom() {
  return (
    <div className='w-full content-end row'>
      <Box
        component='ul'
        className='row gap-2.5'
        sx={{ m: 0, p: '20px', listStyle: 'none' }}
      >
        {links.map((label, i) => (
          <Box
            component='li'
            key={i}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: '4px',
            }}
          >
            <Link
              component={NextLink}
              href='#'
              underline='none'
              sx={{
                color: 'white',
                fontSize: '12px',
                textTransform: 'capitalize',
              }}
            >
              {label}
            </Link>
          </Box>
        ))}
      </Box>

      <div className='row items-center justify-start p-5'>
        <Box
          component='span'
          sx={{
            px: '12px',
            py: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'black',
            border: '0.5px solid white',
            borderRadius: '24px',
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
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
          >
            <LanguageIcon sx={{ fontSize: 16, color: 'white' }} />
            English
          </Link>
        </Box>
      </div>
    </div>
  );
}