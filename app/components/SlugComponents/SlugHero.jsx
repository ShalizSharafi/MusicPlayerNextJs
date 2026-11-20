// import React from 'react'

// export default function SlugHero({name,bgColor}) {
//   return (
//     <div className='w-full flex items-center justify-start px-5 py-10 rounded-[5px]' style={{backgroundColor: bgColor}}>
//       <h1 className='text-white flex items-center text-start capitalize font-bold text-2xl lg:text-5xl'>{name}</h1>
//     </div>
//   )
// }


import React from 'react'
import { Box, Typography } from '@mui/material'

export default function SlugHero({ name, bgColor }) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        px: 2.5,
        marginBlockStart :6,
        py: 5,
        borderTopRightRadius:3,
        borderTopLeftRadius:3,
        backgroundColor: bgColor,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'start',
          textTransform: 'capitalize',
          fontWeight: 700,
          fontSize: {
            xs: '1.5rem',
            lg: '3rem',
          },
        }}
      >
        {name}
      </Typography>
    </Box>
  )
}