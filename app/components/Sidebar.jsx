import React from 'react'
import SidebarTop from './SidebarTop'
import SidebarMiddle from './SidebarMiddle'
import SidebarBottom from './SidebarBottom'
import SmallNavigation from './SmallNavigation'

export default function Sidebar({hamOpen}) {
  return (
    <div className={`z-100 lg:flex lg:w-1/4 left-0 fixed top-20 bottom-20 h-[calc-(100%-160px)] bg-fixedItemsBg  gap-5 flex-wrap  content-start rounded-[5px] ${hamOpen? 'flex h-full' : 'hidden'}`}>
     <SmallNavigation hamOpen={hamOpen}/>
     <SidebarTop/>
     <SidebarMiddle/>
     <SidebarBottom/>
    </div>
  )
}
