import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"
import { auth } from "./config.js";

const welcomeText = document.getElementById('welcome-text');

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user.email);
      welcomeText.textContent = `Welcome ${user.email}`;
    } else {
      // User is signed out
      // ...
    }
  });
