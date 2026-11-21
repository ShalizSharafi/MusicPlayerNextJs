import React from 'react'
import ListContent from '../ContentLayout/ListContent'
import ArtistTitle from './ArtistTitle'
import formatTime from './Format'
import SlugAlbums from '../SlugComponents/SlugAlbums'

export default function Artist({popularTracks=[],popularAlbums=[]}) {
  return (
    <ul className='w-full flex-wrap mt-5 flex gap-2.5 border'>
       {/* //////artist's songs */}
       <ArtistTitle artistTitle='Popular Tracks'/>
      {
       popularTracks.map((p,i)=>{
              return(
                     <ListContent key={`${p.id}-${i}`} title={p.title} picture={p.album.cover} time={formatTime(p.duration)} index={i+1} id={p.id} preview={p.preview} tracks={popularTracks}/>
              )
       })
      }
      {/* /////// other parts for the artist section */}
       <ArtistTitle artistTitle='Popular Albums'/>
      {/* /////popular albums */}
       <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 pt-5 lg:pt-8 gap-5'>
              {popularAlbums.map((val,i)=>{
              return(
                    <SlugAlbums key={`${val.id}-${i}`} cover={val.cover} albumTitle={val.title} id={val.id} artistTitle='Popular Albums'/> 
              )
       })}
       </div>

    </ul>
  )
}
