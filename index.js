import { auth,db } from "./firebase.mjs"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


var creat = document.getElementById("creat")
creat.addEventListener('click',()=>{

  var firstNam = document.getElementById("first").value;
  var lastNam = document.getElementById("last").value;
  var mobileNum = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
 
var userData = {
  firstNam : firstNam,
  lastNam : lastNam,
  mobileNum : mobileNum,
  email : email,
  pass : pass
}


  createUserWithEmailAndPassword(auth,userData.email, userData.pass)
  .then(async(userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    alert("account bn gya")
    
    try {
      const docRef = await addDoc(collection(db,"data"), {
      ...userData,
      uid:user.uid ;
      userData = ""
      
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
    
  //   sendEmailVerification(auth.currentUser)
  // .then(() => {
  //   // Email verification sent!
  //   // ...
  // });
    window.location.href='singin.html'
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("errorCode",errorCode);
    console.log("errorMessage",errorMessage);
  });})
  console.log(user);