import React from 'react'

export default function CreatePlaylistLayout({state,dispatch,handleSave}) {
  return (
    <div className='w-full  md:w-1/2 p-5 flex flex-wrap '>
      <form onSubmit={handleSave} className='w-full gap-5 rounded-[5px] flex p-5 flex-wrap  bg-bareBlack '>
       <figure className='w-20 overflow-hidden h-20  flex items-center justify-center bg-white/20'>
              <input onChange={(e)=>{
                     const file = e.target.files[0]
                     if(file){
                            const reader = new FileReader()
                            reader.onload = ()=>{
                                   dispatch({type:'SET_IMG',value:reader.result})
                            }
                     reader.readAsDataURL(file)
                     }
              } //This converts the image into a data URL that can be stored in localStorage.
                     
              } className=' cursor-pointer' type="file" accept="image/*" />
       </figure>
       <div className='w-full flex gap-5 flex-wrap'>
       <input value={state.title} onChange={(e)=>dispatch({type:'SET_TITLE',value:e.target.value})} type="text" className='w-full text-white lg:w-1/2 p-2.5 h-8 rounded-[10px] text-[14px] bg-black/70 placeholder:text-white/50 outline-none' placeholder='Title *' />
       <textarea value={state.desc} onChange={(e)=>dispatch({type:'SET_DESC', value:e.target.value})} type="text" className='w-full text-white  p-2.5 h-25 rounded-[10px] text-[14px] bg-black/70 placeholder:text-white/50 outline-none flex items-start' placeholder='Description' />
       </div>
       <button type='submit' className='w-1/3 grow md:grow-0 text-white md:w-auto p-2.5 h-8 rounded-[10px] text-[14px] hover:bg-black duration-400 cursor-pointer bg-black/70 flex items-center justify-center font-bold'>save</button>
       <button type='button' onClick={()=>dispatch({type:'RESET'})} className='w-1/3 grow md:grow-0 text-white md:w-auto p-2.5 h-8 rounded-[10px] text-[14px] hover:bg-black duration-400 cursor-pointer bg-black/70 flex items-center justify-center font-bold'>cancel</button>
      </form>
    </div>
  )
}

/////type='button' prevents the button to submit