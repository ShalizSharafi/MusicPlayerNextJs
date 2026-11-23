import React from 'react'

export default function CreatePlaylistPreview({state}) {
  return (
    <div className='w-full  md:w-1/2 p-5 sm:flex hidden flex-wrap'>
      <div className='w-full content-start border border-white/20 rounded-[5px] flex p-5 flex-wrap bg-black gap-5 '>
        <figure className='w-20  h-20   flex items-center justify-center'>
              <img src={state.image || ''} alt="" className='w-full h-full object-cover' />
       </figure>
       <div className='w-full flex content-start  flex-wrap '>
       <h3 className='w-full text-start text-white lg:w-1/2 p-2.5 text-[14px]  flex items-center  placeholder:text-white/50 outline-none' placeholder='Title *' ></h3>
       <p className='w-full text-white p-2.5 text-start text-[14px]  flex   items-center justify-start'></p>
       </div>
      </div>
    </div>
  )
}
