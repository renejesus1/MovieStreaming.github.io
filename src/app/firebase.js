import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  
    apiKey: "AIzaSyB_CaTo8cgRPkZsPK4XimXuTWoujJv9sF4",
    authDomain: "frameworks-1a4db.firebaseapp.com",
    projectId: "frameworks-1a4db",
    storageBucket: "frameworks-1a4db.appspot.com",
    messagingSenderId: "138340447525",
    appId: "1:138340447525:web:5e22607d481514026696cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)