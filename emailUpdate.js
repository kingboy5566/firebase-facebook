
import { auth } from "./firebase.mjs"
import {updateEmail, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


var logout = document.getElementById("logout")
logout.addEventListener('click', ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened. 
  });
  
});

var newEmailbtn = document.getElementById('emailbtn')


newEmailbtn.addEventListener('click',()=>{
    alert("up date email")
var emailUpdate = document.getElementById("newEmail").value
console.log(emailUpdate);
updateEmail(auth.currentUser, emailUpdate)
.then(() => {
  // Email updated!
  // ...
  console.log(currentUser.emailUpdate);
   window.location.href="singin.html"
}).catch((error) => {
  // An error occurred
  // ...
});

});




// var logout = document.getElementById("logout")
// logout.addEventListener('click', ()=>{
//   signOut(auth).then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened. 
//   });
  
// });