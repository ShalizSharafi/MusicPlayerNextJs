// import React from 'react'
// import Link from 'next/link'

// export default function HeaderIcons() {
//   return (
//     <ul className='w-1/2 gap-2.5 lg:w-2/16 flex justify-start items-center'>
//           <li className='w-10 h-10 rounded-full bg-white  overflow-hidden'><Link className='w-full h-full bg-black  flex items-center justify-center ' href='#'>
//            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className='size-12'><path d="M12.001 2C6.50098 2 2.00098 6.5 2.00098 12C2.00098 17.5 6.50098 22 12.001 22C17.501 22 22.001 17.5 22.001 12C22.001 6.5 17.551 2 12.001 2ZM15.751 16.65C13.401 15.2 10.451 14.8992 6.95014 15.6992C6.60181 15.8008 6.30098 15.55 6.20098 15.25C6.10098 14.8992 6.35098 14.6 6.65098 14.5C10.451 13.6492 13.751 14 16.351 15.6C16.701 15.75 16.7501 16.1492 16.6018 16.45C16.4018 16.7492 16.0518 16.85 15.751 16.65ZM16.7501 13.95C14.051 12.3 9.95098 11.8 6.80098 12.8C6.40181 12.9 5.95098 12.7 5.85098 12.3C5.75098 11.9 5.95098 11.4492 6.35098 11.3492C10.001 10.25 14.501 10.8008 17.601 12.7C17.9018 12.8508 18.051 13.35 17.8018 13.7C17.551 14.05 17.101 14.2 16.7501 13.95ZM6.30098 9.75083C5.80098 9.9 5.30098 9.6 5.15098 9.15C5.00098 8.64917 5.30098 8.15 5.75098 7.99917C9.30098 6.94917 15.151 7.14917 18.8518 9.35C19.301 9.6 19.451 10.2 19.201 10.65C18.9518 11.0008 18.351 11.1492 17.9018 10.9C14.701 9 9.35098 8.8 6.30098 9.75083Z"></path></svg>
//            </Link></li>
//           <li className='w-10 h-10 rounded-full  overflow-hidden'><Link href='#' className='w-full bg-bareBlack h-full flex items-center justify-center  '>
//          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className='size-6'><path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM13 19H18V9.15745L12 3.7029L6 9.15745V19H11V13H13V19Z"></path></svg>
//           </Link></li>
//           <li className='lg:hidden flex w-10 h-10 rounded-full  overflow-hidden'><Link href='#' className='w-full bg-bareBlack h-full flex items-center justify-center  '>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#807E7A" className='size-6'><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
//           </Link></li>
//           </ul>
//   )
// }


"use client"

import React from 'react';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';

const buttonSx = {
  width: '100%',
  height: '100%',
  bgcolor: 'var(--color-bareBlack)',
  '&:hover': { bgcolor: 'var(--color-bareBlack)' },
};

export default function HeaderIcons({dispatch,searchOpen}) {
  return (
    <ul className='w-1/2 gap-2.5 lg:gap-5 lg:w-2/16 flex justify-start items-center'>
      <li className='w-10 h-10 rounded-full bg-white overflow-hidden'>
        <IconButton
          component={Link}
          href='/'
          sx={{ ...buttonSx, bgcolor: 'black', '&:hover': { bgcolor: 'black' } }}
        >
          <SvgIcon sx={{ fontSize: 40, color: 'white' }} viewBox='0 0 24 24'>
            <path d="M12.001 2C6.50098 2 2.00098 6.5 2.00098 12C2.00098 17.5 6.50098 22 12.001 22C17.501 22 22.001 17.5 22.001 12C22.001 6.5 17.551 2 12.001 2ZM15.751 16.65C13.401 15.2 10.451 14.8992 6.95014 15.6992C6.60181 15.8008 6.30098 15.55 6.20098 15.25C6.10098 14.8992 6.35098 14.6 6.65098 14.5C10.451 13.6492 13.751 14 16.351 15.6C16.701 15.75 16.7501 16.1492 16.6018 16.45C16.4018 16.7492 16.0518 16.85 15.751 16.65ZM16.7501 13.95C14.051 12.3 9.95098 11.8 6.80098 12.8C6.40181 12.9 5.95098 12.7 5.85098 12.3C5.75098 11.9 5.95098 11.4492 6.35098 11.3492C10.001 10.25 14.501 10.8008 17.601 12.7C17.9018 12.8508 18.051 13.35 17.8018 13.7C17.551 14.05 17.101 14.2 16.7501 13.95ZM6.30098 9.75083C5.80098 9.9 5.30098 9.6 5.15098 9.15C5.00098 8.64917 5.30098 8.15 5.75098 7.99917C9.30098 6.94917 15.151 7.14917 18.8518 9.35C19.301 9.6 19.451 10.2 19.201 10.65C18.9518 11.0008 18.351 11.1492 17.9018 10.9C14.701 9 9.35098 8.8 6.30098 9.75083Z" />
          </SvgIcon>
        </IconButton>
      </li>

      <li className='w-10 h-10 rounded-full overflow-hidden'>
        <IconButton component={Link} href='/' sx={buttonSx}>
          <HomeOutlinedIcon sx={{ fontSize: 24, color: '#fff' }} />
        </IconButton>
      </li>

      <li onClick={()=>dispatch({type:'searchToggle'})} className={`lg:hidden  w-10 h-10 rounded-full overflow-hidden ${searchOpen ? 'hidden' : 'flex'}`}>
        <IconButton component={Link} href='#' sx={buttonSx}>
          <SearchIcon sx={{ fontSize: 24, color: '#807E7A' }} />
        </IconButton>
      </li>
    </ul>
  );
}