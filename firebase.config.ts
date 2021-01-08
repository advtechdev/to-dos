import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyC3GjERxGi1_CE2M2_Kc1tYW-dTEDvcDlE",
  authDomain: "to-do-8e502.firebaseapp.com",
  projectId: "to-do-8e502",
  storageBucket: "to-do-8e502.appspot.com",
  messagingSenderId: "740939973752",
  appId: "1:740939973752:web:a3fa41b898b555f274598d",
}

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)
