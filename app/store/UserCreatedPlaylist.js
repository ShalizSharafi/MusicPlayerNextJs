import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const userCreatedPlaylist = create(
       persist(
              (set)=>({
                     playlists:[],

                     addPlaylist :(item)=>
                            set((state)=>({
                                   playlists:[...state.playlists,item]
                            }))
              }),
              {name:'user-created-playlists'}
       )
)

export default userCreatedPlaylist