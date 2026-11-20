'use client'
import React, { Suspense, useEffect, useReducer, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import BottomAd from './BottomAd'
import Footer from './footer/Footer'
import BackGate from './BackGate'
// import Back from './Back'

function reducer(state,action){
 switch(action.type){
       case 'hamToggle' :
       return {...state,hamOpen:!state.hamOpen}
       case 'searchToggle' :
       return {...state,searchOpen:!state.searchOpen}
       case 'searchClose':
       return{...state, searchOpen:false}
       default:
       return state
 }
 
}

export default function AppShell({children}) {
       const [state ,dispatch] = useReducer(reducer,{hamOpen:false, searchOpen:false})
       const [scrolled,setScrolled] = useState(false)
     

       useEffect(()=>{
        const handlescroll = ()=> setScrolled(scrollY > 60)
        addEventListener('scroll',handlescroll)
        return () => removeEventListener('scroll', handlescroll)
       },[scrolled])
  return (
    <>
    <Header dispatch={dispatch} searchOpen={state.searchOpen}/>
    <Sidebar hamOpen={state.hamOpen} />
    <div className='mt-10 lg:ml-[25%] w-full lg:w-3/4'>
   <Suspense>
    <BackGate hamOpen={state.hamOpen} scrolled={scrolled}/>
   </Suspense>
     <main>{children}</main>
     <Footer />
    </div>
    <BottomAd/>
    </>
  )
}
