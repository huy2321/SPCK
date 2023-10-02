import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { auth } from "./config.js";

const fullName = document.getElementById('fullname')
const img = document.getElementById('image')

const handleGetProfile = () => {
  onAuthStateChanged(auth, (user) => {
      if(user) {
        fullName.textContent = user.displayName
        img.src = user.photoURL
      }
  });
    
};
handleGetProfile();
