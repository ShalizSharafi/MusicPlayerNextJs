import React from 'react'
import Search from './Search'
import HeaderIcons from './HeaderIcons'
import Navigation from './Navigation'
import LoginLogout from './LoginLogout'
import Hamburger from './Hamburger'

export default function Header({dispatch,searchOpen}) {
 
  return (
    <header className='bg-black z-100 px-5 w-full fixed top-0 left-0 h-20 flex  *:h-full'>
       {/* ///// header icons  */}
      <HeaderIcons searchOpen={searchOpen} dispatch={dispatch}/>
      {/* ////search section */}
     <Search searchOpen={searchOpen} dispatch={dispatch}/>
      {/* ///navigation */}
      <Navigation/>
      {/* /////login logout */}
       <LoginLogout/>
      {/* ////hamburger menu */}
      <Hamburger dispatch={dispatch} />
    </header>
  )
}


// https://api.deezer.com/chart/0/tracks?limit=100
// https://developers.deezer.com/api
// https://developers.deezer.com/api/errors