import React from 'react'
import ListContent from '../ContentLayout/ListContent'

///////cols
export default function Radio({radio={},bgColor}) {
  return (
    <ul className='w-full flex-wrap flex mt-5 gap-2.5 border'>
      <ListContent title={radio.title} bgColor={bgColor} picture={radio.picture} time={radio.duration}/>
    </ul>
  )
}
