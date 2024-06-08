
import { auth } from "./firebase.mjs"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";




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