import { auth } from "./firebase.mjs"
import { createUserWithEmailAndPassword,sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


var creat = document.getElementById("creat")
creat.addEventListener('click',()=>{
  var email = document.getElementById("email").value
  var pass = document.getElementById("password").value
  console.log(email);
  console.log(pass);
  createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
    console.log(user);
    window.location.href='singin.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("errorCode",errorCode);
    console.log("errorMessage",errorMessage);
  });})