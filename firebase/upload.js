import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { auth } from "./config.js";

const nameSong = document.getElementById('song-name');
const authorSong = document.getElementById('song-singer');
const audioSong = document.getElementById('song-audio');
const img = document.getElementById('song-image');

const handleGetSong = () => {
  onAuthStateChanged(auth, (user) => {
      if(user) {
        nameSong.textContent = user.displayName
        authorSong.textContent = user.displayName
        audioSong.src = user.audioURL
        img.src = user.photoURL
      }
  });
    
};
handleGetSong();