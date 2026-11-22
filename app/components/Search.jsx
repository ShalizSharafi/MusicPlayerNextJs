// import React from 'react'

// export default function Search() {
//   return (
//      <div className='hidden lg:w-5/16 p-2.5 lg:flex items-center'>
//       <form className='w-full h-3/4 hover:bg-white/40 backdrop-blur-2xl bg-bareBlack flex items-center rounded-4xl overflow-hidden duration-400'>
//        <i className='w-10 h-full flex items-center justify-center'>
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#807E7A" className='size-6'><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
//        </i>
//        <input type="text" className='w-2/3 outline-none px-2 text-white font-normal'/>
//       </form>
//       </div>
//   )
// }


"use client";

import React, { useEffect, useRef, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

export default function Search({searchOpen, dispatch}) {
  const router = useRouter()

  const handleSubmit = (e)=>{
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(query)}`)
    dispatch({type:'searchClose'})
  }

  /////search input

  const [query,setQuery] = useState('')
  // const [results,setResults] = useState([])

 

  const inputRef = useRef(null)

  useEffect(()=>{
    if(searchOpen) inputRef.current?.focus()
  },[searchOpen])

  return (
    <div className={`lg:w-5/16 p-2.5 lg:flex items-center ${searchOpen? 'flex w-full' :'hidden w-0'}`}>
      <form onSubmit={handleSubmit} className='w-full h-3/4 hover:bg-white/40 backdrop-blur-2xl bg-bareBlack flex items-center rounded-4xl overflow-hidden duration-400'>
        <InputBase
        onChange={(e)=>setQuery(e.target.value)}
          fullWidth inputRef={inputRef}
          placeholder='What do you want to play?'
          startAdornment={
            <InputAdornment 
              position='start'
              sx={{ width: 40, justifyContent: 'start', m: 1 }}
            >
              <SearchIcon sx={{ color: '#807E7A', fontSize: 24 }} />
            </InputAdornment>
          }
          sx={{
            height: '100%',
            color: 'white',
            fontWeight: 'normal',
            pr: 1,
            fontSize :{xs:'13px', lg:'16px'},
            '& input': { px: 1 },
          }}
        />
      </form>
      {/* {results.length > 0 && (
  <div className=' text-white '>
    {results.map((val)=>{
      return(
        <div key={val.id}>
          {val.title}
        </div>
      )
    })}
  </div>
)} */}
    </div>
  );
}