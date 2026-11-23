'use client'
import React, { useReducer } from 'react'
import CreatePlaylistLayout from './CreatePlaylistLayout'
import CreatePlaylistPreview from './CreatePlaylistPreview'

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
       // const [image, setImage] = useState('')
       // const [title,setTitle] = useState('')
       // const [desc,setDesc] = useState('')
       const [state,dispatch] = useReducer(reducer,{image:null, title:'', desc:''})
  return (
    <div className='px-5 md:px-10 w-full flex flex-wrap'>
    <CreatePlaylistLayout state={state} dispatch={dispatch}/>
    <CreatePlaylistPreview state={state}/>
    </div>
  )
}
