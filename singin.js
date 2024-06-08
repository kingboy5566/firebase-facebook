import { auth } from "./firebase.mjs"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



var sing = document.getElementById("singin")
sing.addEventListener("click", ()=>{
var email = document.getElementById("email").value
var password = document.getElementById("pass").value
alert("well comr in side sing in page")
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if(user.emailVerified == true){
      // ...
      
      alert("well come sing in page")
      window.location.href="homepage.html"
      console.log(user);}
      else{
        alert("plase email verifaction")
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorCode",errorCode);
      console.log("errorMessage",errorMessage);
    });})