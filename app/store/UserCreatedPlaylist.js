import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const userCreatedPlaylist = create(
       persist(
              (set) => ({
                     playlists: [],

                     ////add card to the userplay list section
                     addPlaylist : (playlist)=>
                            set((state)=>({
                                   playlists :[...state.playlists,playlist]
                            })),
                            
              ///add items inside each playlist
              addPlaylistItem: (userCreatedPlaylistId,item)=>
                     set((state)=>({
                            playlists : state.playlists.map((val)=>
                            val.userCreatedPlaylistId === userCreatedPlaylistId ? {...val,playlistItems:[...(val.playlistItems ?? []),item]} : val
                            )
                     })),

                     ///remove from each card
                     removePlaylistItem: (userCreatedPlaylistId, itemId, itemType) =>
  set((state) => ({
    playlists: state.playlists.map((each) =>
      Number(each.userCreatedPlaylistId) === Number(userCreatedPlaylistId)
        ? {
            ...each,
            playlistItems: each.playlistItems.filter(
              (item) => item.id !== itemId || item.type !== itemType
            )
          }
        : each
    )
  }))
              }),
              { name: 'user-created-playlists' }
       )
)

export default userCreatedPlaylist


///userCreatedPlaylistId tells us which playlist we want to add something to.
///item: the actual content we want to add, such as a track, album, radio, or another playlist
// we want to add a song to a playlist with ID 123.
// addPlaylistItem(123, {
//   id: 456,
//   title: 'Attention',
//   type: 'track'
// })


// addPlaylist: (playlist) =>
//   set((state) => ({
//     playlists: [...state.playlists, playlist]
//   })),

// addPlaylistItem: (userCreatedPlaylistId, item) =>
//   set((state) => ({
//     playlists: state.playlists.map((val) =>
//       val.userCreatedPlaylistId === userCreatedPlaylistId
//         ? {
//             ...val,
//             playlistItems: [...(val.playlistItems ?? []), item]
//           }
//         : val
//     )
//   })),