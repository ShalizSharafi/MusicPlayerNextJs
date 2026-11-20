'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Back from './Back'

export default function BackGate({hamOpen,scrolled}) {
       const pathname = usePathname()
  if(pathname === '/') return null // we don't need back btn on the homepage
  return <Back hamOpen={hamOpen} scrolled={scrolled}/>
}
