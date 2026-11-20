import { create } from 'zustand'

// First Zustand Store

const usePlayerStore = create((set)=>({
        currentTrackId : null, //which track is active
       isPlaying : false, //whether that track is currently playing
       preview: null,
       audio:null,
       setAudio: (audio) => set({ audio: audio }),
       currentTime: 0,
       duration: 0,
setDuration: (value) => set({ duration: value }),
       // receive a track ID → set that ID as the current track → set isPlaying to true.
       // by set we're updating the store
      playTrack: (id, preview) => {
  set((state) => {

    if (state.currentTrackId === id) {

      if (state.isPlaying) {
        state.audio.pause()
      } else {
        state.audio.play().catch(() => {})
      }

      return {
        isPlaying: !state.isPlaying,
      }
    }
    state.audio.pause()
    state.audio.src = preview
    state.audio.play().catch(() => {})

    return {
      currentTrackId: id,
      preview: preview,
      isPlaying: true,
    }
  })
},
setIsPlaying: (value) => set({ isPlaying: value }),
setCurrentTime: (value) => set({ currentTime: value }),
}))

export default usePlayerStore