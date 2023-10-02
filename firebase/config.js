  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCueiyg31rNPl8KzcqDgqs1cU97I3e2-zo",
    authDomain: "jsi03-ff4fc.firebaseapp.com",
    projectId: "jsi03-ff4fc",
    storageBucket: "jsi03-ff4fc.appspot.com",
    messagingSenderId: "518014194715",
    appId: "1:518014194715:web:b8d48fd26d06ed399cd4be",
    measurementId: "G-HFQ69PT0TX"
  };

  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
