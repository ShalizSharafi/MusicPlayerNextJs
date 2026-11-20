import React from 'react'


/////rows
export default function ListContent({title,picture,time,index}) {
  return (
    <ul className='w-full justify-between flex items-center p-5 bg-bareGray/20 rounded-[10px] hover:bg-bareGray/40 duration-400 '>
      <div className='flex items-center gap-5'>
        <li className='text-white/50 font-normal text-xs lg:text-[15px]'>{index}</li>
      <li><figure className='w-8 h-8 rounded-xs flex items-center justify-center overflow-hidden'><img src={picture} alt={title} className='w-full h-full object-cover' /></figure></li>
      </div>
      <li className='text-white/80 hover:text-white duration-400 flex w-1/3 text-start justify-start items-center capitalize font-normal text-xs lg:text-[15px]'>{title}</li>
      <li className='w-5 h-5 flex items-center justify-center'>
       <svg className='w-full cursor-pointer h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" stroke='white'><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
      </li>
      <li className='text-white/50 text-xs lg:text-[15px]'>{time}</li>
    </ul>
  )
}
