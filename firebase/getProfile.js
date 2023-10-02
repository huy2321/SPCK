import {updateProfile} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { auth } from "./config.js";





 const nameProfile = document.getElementById('name');
const profilePhoto = document.getElementById('photo');
const submit = document.getElementById('submit-btn');

const handleUpdateProfile= () =>{
    updateProfile(auth.currentUser, {
        displayName: nameProfile.value, photoURL: profilePhoto.value,
      }).then(() => {
       alert('update Thannh cong')
       window.location = './profile.html'
      }).catch((error) => {
        alert(error.code);
      });
}


  submit.addEventListener("click",handleUpdateProfile);