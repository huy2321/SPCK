import { auth } from "./config.js";
import { signOut} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"

const logoutbtn = document.getElementById('logout');
const handleLogout = () => {
    signOut(auth).then(() => {

        window.location = './login.html';
      }).catch((error) => {
        // An error happened.
      });
};
logoutbtn.addEventListener("click", handleLogout);
