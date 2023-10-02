import { updatePassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { auth } from "./config.js";

const newInput = document.getElementById('new-password');
const changeBtn = document.getElementById('change-btn');

const handleChangePassword = () => {
    const user = auth.currentUser;
    updatePassword(user, newInput.value).then(() => {
        alert('doimk thanh cong')
        
    }).catch((error) => {
        alert(error.code)
      });
}

changeBtn.addEventListener('click',handleChangePassword);