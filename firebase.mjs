  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
 
 
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD33vj9FRe2GXMfizZdSWF43cqryAG1Ph8",
    authDomain: "web-app-projects-e595d.firebaseapp.com",
    projectId: "web-app-projects-e595d",
    storageBucket: "web-app-projects-e595d.appspot.com",
    messagingSenderId: "271646131291",
    appId: "1:271646131291:web:f98044cd91697094342b7e",
    measurementId: "G-BNJ8GJWR8D"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);