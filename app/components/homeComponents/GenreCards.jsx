// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function GenreCards({bgColor,genre,src}) {
//   return (
//     <Link href='' className='w-1/3 lg:w-1/4 grow p-2.5 lg:p-5 rounded-xl flex items-start justify-start h-36 lg:h-40 relative overflow-hidden' style={{backgroundColor: bgColor}}>
//       <span className='text-white font-bold text-[18px] lg:text-[20px]'>{genre}</span>
//         <Image className=' shadow shadow-amber-50/50 rounded-[5px] absolute top-14 -right-5 rotate-45' src={src} alt={genre} width={110} height={110}/>
//     </Link>
//   )
// }


"use client";

import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function GenreCards({ bgColor, genre, src, href }) {
  return (
    <Link
      component={NextLink}
      href={href}
      underline='none'
      className='w-1/3 lg:w-1/4 grow p-2.5 lg:p-5 rounded-xl flex items-start justify-start h-36 lg:h-40 relative overflow-hidden'
      sx={{ backgroundColor: bgColor } }
    >
      <Typography
        component='span'
        sx={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: { xs: '18px', md: '20px' },
        }}
      >
        {genre}
      </Typography>

      <Image
        className='shadow shadow-amber-50/50 rounded-[5px] absolute top-14 -right-5 rotate-45'
        src={src}
        alt=''
        width={110}
        height={110}
      />
    </Link>
  );
}