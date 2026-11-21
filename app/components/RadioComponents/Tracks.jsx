import React from 'react'
import ListContent from '../ContentLayout/ListContent'
import formatTime from './Format'

export default function Tracks({track={}}) {
  return (
    <ul className='w-full flex-wrap mt-5 flex gap-2.5 border'>
     <ListContent title={track.title} picture={track.album?.cover} time={formatTime(track.duration)} id={track.id} preview={track.preview} tracks={[track]} />
    </ul>
  )
}
