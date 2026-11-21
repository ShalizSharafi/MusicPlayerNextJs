import { create } from 'zustand'

// First Zustand Store
// set is zustand's way of chaning the store
const usePlayerStore = create((set)=>({
       currentTrackId : null, //which track is active
       currentTrackIndex: null,//track index
       isPlaying : false, //whether that track is currently playing
       preview: null, //the Deezer preview URL for that track
       audio:null,
       tracks:[],

       setAudio: (audio) => set({ audio: audio }),
       setTracks :(tracks)=>set({tracks:tracks}),
       setIsPlaying: (value) => set({ isPlaying: value }),
       setCurrentTime: (value) => set({ currentTime: value }),
       setDuration: (value) => set({ duration: value }),

       currentTime: 0,
       duration: 0,
       // receive a track ID → set that ID as the current track → set isPlaying to true.
       // by set we're updating the store
      playTrack: (id, preview) => {
      set((state) => {
       const currentIndex = state.tracks.findIndex(track=> track.id === id) ///find the track index for the next and prev btns part 

    if (state.currentTrackId === id) { //we check if the clicked track is already the current track so if it was a different track we skip this part entirely

      if (state.isPlaying) {
        state.audio.pause()
      } else {
        state.audio.play().catch(() => {}) //catch handles the rejection and the curly bracket means if the play part failed don't do anything
      }

      return {
        isPlaying: !state.isPlaying, /// update isPlaying
      }
    }

    //////if the trackid and the id weren't the same we reach this part instead of the if() part i say we skip entirely. 
    state.audio.pause() //Stop whatever track is currently playing
    state.audio.src = preview //Give the audio element the new track's preview URL
    state.audio.play().catch(() => {}) //Start playing the new track
//////finally update zustand

    return {
      currentTrackId: id,
      preview: preview,
      isPlaying: true,
      currentTrackIndex: currentIndex,
    }
  })
},


/////next track action

       nextTrack : ()=>{
              set((state)=>{
                     const nextIndex = state.currentTrackIndex + 1
                     const nextTrack = state.tracks[nextIndex]

                     if (!nextTrack) return {isPlaying : false}

                     state.audio.pause()
                     state.audio.src = nextTrack.preview
                     state.audio.play().catch(() => {})

                       return {
                      currentTrackId: nextTrack.id,
                      currentTrackIndex: nextIndex,
                      preview: nextTrack.preview,
                      isPlaying: true,
    }
              })
       },

       ////previous track action

       previousTrack :()=>{
              set((state)=>{
                     const previousIndex = state.currentTrackIndex - 1
                     const previousTrack = state.tracks[previousIndex]

                     if(!previousTrack) return

                     state.audio.pause()
                     state.audio.src = previousTrack.preview
                     state.audio.play().catch(()=>{})


                     return{
                            preview : previousTrack.preview,
                            isPlaying:true,
                            currentTrackId: previousTrack.id,
                            currentTrackIndex : previousIndex

                     }
              })
       }

}))

export default usePlayerStore