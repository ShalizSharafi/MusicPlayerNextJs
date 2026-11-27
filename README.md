# 🎵 sofar — Music Streaming Web App

A modern music streaming web application built with **Next.js**, inspired by platforms such as Spotify and Deezer.

The project uses the **Deezer API** to provide artists, albums, tracks, playlists, radios, and music previews, with a responsive interface designed for both desktop and mobile screens.

## 🎧 Live Demo

**[→ Live Demo](https://music-player-next-js-orpin.vercel.app/)**

<img width="1524" height="954" alt="download" src="https://github.com/user-attachments/assets/00d473b1-2568-478f-b1ed-32db36266614" />


## ✨ Features

- 🎵 Browse music using the Deezer API
- 🎤 Explore artists and their popular tracks
- 💿 Browse albums and album details
- 📻 Explore radio stations
- 🎶 Browse playlists and tracks
- 🔎 Search for music
- ▶️ Play 30-second track previews
- ⏸️ Play / pause audio
- 🎚️ Seek through the currently playing track
- 📱 Responsive design for different screen sizes
- 🎨 Dynamic backgrounds and styling based on the selected content
- ⚡ Client-side audio state management with Zustand

## 🛠️ Built With

- **Next.js**
- **React**
- **JavaScript**
- **Tailwind CSS**
- **Material UI (MUI)**
- **Zustand**
- **Deezer API**
- **Vercel**

## 🎯 Project Highlights

### Global Audio Player

The application uses a single global audio player rather than creating a separate audio element for every track.

The currently playing track is managed through **Zustand**, allowing different parts of the application to interact with the same player state.

### Dynamic Content

Most of the application's music content is fetched dynamically from the Deezer API, including:

- Artists
- Albums
- Tracks
- Playlists
- Radios
- Genres

### Responsive UI

The interface is designed to adapt to different screen sizes using **Tailwind CSS**, with additional components from **Material UI** where needed.

## 📂 Project Structure

```text
app/
├── (dynamicPages)/
│   ├── [slug]/
│   ├── artist/[id]/top/
│   ├── album/[id]/
│   ├── playlist/[id]/
│   ├── radio/[id]/
│   └── track/[id]/
│
├── components/
│   ├── AudioPlayer/
│   ├── ContentLayout/
│   ├── RadioComponents/
│   └── ...
│
├── store/
│   └── PlayerStore.js
│
└── layout.js
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/ShalizSharafi/sofar.git
```

Navigate into the project:

```bash
cd sofar
```

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```



## 🌐 Deployment

The project is deployed with **Vercel**.

**Live Demo:**  
https://music-player-next-js-orpin.vercel.app/

## 👩🏻‍💻 Author

**Shalizeh Sharafi**

Computer Engineering graduate and junior front-end developer interested in building modern, responsive web applications.

[GitHub](https://github.com/ShalizSharafi)
