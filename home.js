
import { auth } from "./firebase.mjs"
import { onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";




onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
      console.log(user);
    } else {
      // User is signed out
      // ...
      window.location.href="singin.html"
    }
  });



  var logout = document.getElementById("logout")
  logout.addEventListener('click', ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  });


  var emailbtn = document.getElementById('update')
  function UPemail(){
    window.location.href="emailUpdate.html"
  }
  
  emailbtn.addEventListener('click',UPemail)

















