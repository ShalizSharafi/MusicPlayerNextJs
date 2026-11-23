'use client'
import React, { useReducer } from 'react'
import CreatePlaylistLayout from './CreatePlaylistLayout'
import CreatePlaylistPreview from './CreatePlaylistPreview'
import userCreatedPlaylist from '@/app/store/UserCreatedPlaylist'

const reducer = (state,action)=>{
       switch(action.type){
              case 'SET_IMG':
                     return {...state, image:action.value}
              case 'SET_TITLE':
                     return {...state, title:action.value}
              case 'SET_DESC':
                     return {...state, desc:action.value}
              default:
                     return state          
       }
}

export default function CreatePlaylistBorder() {
       const [state,dispatch] = useReducer(reducer,{image:null, title:'', desc:''})
       const addPlaylist = userCreatedPlaylist((state)=>state.addPlaylist)

       const handleSave = (e)=>{
              e.preventDefault() //prevents the form from refreshing the page
              addPlaylist({
                     id:Date.now(),//for unique id
                     title:state.title,
                     desc:state.desc,
                     image:state.image,
                     Tracks :[]
              })
       }

  return (
    <div className='px-5 md:px-10 w-full flex flex-wrap'>
    <CreatePlaylistLayout handleSave={handleSave} state={state} dispatch={dispatch}/>
    <CreatePlaylistPreview state={state}/>
    </div>
  )
}
