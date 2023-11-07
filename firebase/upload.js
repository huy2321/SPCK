import {updateSong} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { auth } from "./config.js";

 const authorSong = document.getElementById('author');
const nameSong = document.getElementById('name');
// const imgSong = document.getElementById('photo');
const newSong = document.getElementById('song');
const submit = document.getElementById('submit-btn');

const handleUpdateSong= () =>{
    updateSong(auth.currentUser, {
        displayAuthor: authorSong.value, displayName:nameSong.value,
        //  photoURL: imgSong.value,
          audioURL: newSong.value,
      }).then(() => {
       alert('COMPLETE!')
       window.location = './profile.html'
      }).catch((error) => {
        alert(error.code);
      });
}


  submit.addEventListener("click",handleUpdateSong);