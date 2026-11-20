// import React from 'react'
// import Link from 'next/link'

// export default function BottomAd() {
//   return (
//     <div className='w-full h-40 lg:h-20 p-1 bg-fixedItemsBg fixed bottom-0 left-0'>
//       <div className='p-5 gap-2.5 lg:gap-0 w-full h-full rounded-2xl bg-linear-to-bl from-purple-500 to-blue-500 content-center flex flex-wrap *:border *:border-white'>
//        <div className='w-full *:border flex flex-wrap lg:w-2/3 '>
//        <h3 className='w-full flex text-start items-center justify-start text-white font-bold text-[14px]'>Preview of Spotify</h3>
//        <h4 className='w-full flex text-start items-center justify-start text-white font-normal'>Sign up to get unlimited songs and podcasts with occasional ads. No credit cards needed. </h4>
//        </div>

//        <div className='w-full flex items-center justify-start lg:justify-end lg:w-1/3'>
//        <Link href='' className='text-black px-2.5 lg:px-5 py-2 text-[13px] lg:text-[16px] font-bold capitalize bg-white rounded-4xl'>Sign Up Free</Link>
//        </div>
//       </div>
//     </div>
//   )
// }

"use client";

import React from 'react';
import NextLink from 'next/link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BottomAd() {
  return (
    <div className='w-full h-40 lg:h-20 p-1 bg-fixedItemsBg fixed bottom-0 left-0 '>
      <div className='p-5 gap-2.5 lg:gap-0 w-full h-full rounded-2xl bg-linear-to-bl from-purple-500 to-blue-500 content-center flex flex-wrap'>
        <div className='w-full flex flex-wrap lg:w-2/3'>
          <Typography
            component='h3'
            className='w-full'
            sx={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}
          >
            Preview of Spotify
          </Typography>

          <Typography
            component='h4'
            className='w-full'
            sx={{ color: 'white', fontWeight: 'normal', fontSize: 'inherit' }}
          >
            Sign up to get unlimited songs and podcasts with occasional ads. No credit cards needed.
          </Typography>
        </div>

        <div className='w-full flex items-center justify-start lg:justify-end lg:w-1/3'>
          <Button
            component={NextLink}
            href='#'
            disableElevation
            sx={{
              px: { xs: '10px', lg: '20px' },
              py: '8px',
              fontSize: { xs: '13px', lg: '16px' },
              fontWeight: 'bold',
              textTransform: 'capitalize',
              color: 'black',
              bgcolor: 'white',
              borderRadius: '32px',
              '&:hover': { bgcolor: 'white' },
            }}
          >
            Sign Up Free
          </Button>
        </div>
      </div>
    </div>
  );
}