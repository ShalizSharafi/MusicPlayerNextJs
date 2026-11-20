import React from 'react'
import ListContent from '../ContentLayout/ListContent'

///////cols
export default function Radio({radio={}}) {
  return (
    <ul className='w-full flex-wrap flex mt-5 gap-2.5 border'>
      {/* <ListContent title={radio.title} bgColor={bgColor} picture={radio.picture} time={radio.duration} id={radio.id} preview={radio.preview}/> */}
      {
  radio.map((track, i) => {
    console.log('track:',track)
    return (
      <ListContent
        key={track.id}
        title={track.title}
        picture={track.album?.cover || null}
        time={track.duration}
        id={track.id}
        preview={track.preview}
        index={i + 1}
      />
    )
  })
}
    </ul>
  )
}
