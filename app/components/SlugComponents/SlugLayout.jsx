import React from 'react'
import SlugHero from './SlugHero'
import SlugBorder from './SlugBorder'
import SlugTracks from './SlugTracks'
import SlugArtists from './SlugArtists'
import SlugAlbums from './SlugAlbums'
import SlugPlaylists from './SlugPlaylists'
import SlugRadio from './SlugRadio'
import shortenTheTitle from './ShortenTitle'

//////gather all the layouts together here put all the components here:

export default function SlugLayout({name,bgColor,tracks=[],artists=[],albums=[],playlists=[],radio=[]}){
       // const shortenTheTitle = (text)=>{
       //        const words = text.split('')
       //        if(words.length <= 22) return text
       //        return words.slice(0,21).join('') + '...' 
       // }
       return(
              <section className='w-full flex flex-wrap p-5 lg:p-10'>
                     
              <SlugHero name={name} bgColor={bgColor}/>
              {/* ////top tracks so we're gonna go through tracks api!!!!!!! */}
              <SlugBorder topic='tracks' bgColor={bgColor} >
                    {tracks.map((track,i)=>{
                     return(
                            <SlugTracks key={`${track.id}-${i}`} trackName={track.title} album={shortenTheTitle(track.album.title)} src={track.album.cover_medium} artist={track.artist.name} id={track.id} albumId={track.album.id} artistId={track.artist.id}/>
                     )
                    })}
              </SlugBorder>
             {/* ////  artists */}

             <SlugBorder topic='artists' bgColor={bgColor}>
                    {artists.map((person)=>{
                     return(
                     <SlugArtists key={person.id} src={person.picture} artistName={person.name} id={person.id}/>
                     )
                    })}
             </SlugBorder>
              {/* top labums //// */}

              <SlugBorder topic='albums' bgColor={bgColor}>
                   {albums.map((each)=>{
                     return(
                            <SlugAlbums key={each.id} albumTitle={shortenTheTitle(each.title)} artist={each.artist.name} position={each.position} cover={each.cover} id={each.id} />
                     )
                   })}
              </SlugBorder>

              {/* //////top playlists */}

              <SlugBorder topic='playlists' bgColor={bgColor}>
                     {playlists.map((pl)=>{
                            return(
                                   <SlugPlaylists key={pl.id} playlistTitle={pl.title} picture={pl.picture} user={pl.user.name} count={pl.nb_tracks} id={pl.id} bgColor={bgColor}/>
                            )
                     })}

              </SlugBorder>

              {/* /////radio */}
                     <SlugBorder topic='Radio' bgColor={bgColor}>
                           
                     {radio.map((r,index)=>{
                            return(
                                   <SlugRadio key={`${r.id}-${index}`} radioTitle={r.title} bgColor={bgColor} picture={r.picture} id={r.id}/>
                            )
                     })}
                     </SlugBorder>
              


             </section>
       )
}

//////build the slug layout here and then pass the data inside slug