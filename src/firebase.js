import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

import {signOut,onAuthStateChanged} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAcH8E_V-vVMwpmGkHGV_38jC6PCqbNUD4",
  authDomain: "svelte-auth-1073d.firebaseapp.com",
  projectId: "svelte-auth-1073d",
  storageBucket: "svelte-auth-1073d.appspot.com",
  messagingSenderId: "1047237369740",
  appId: "1:1047237369740:web:752a60a5a387ede43d00a9"
};

/* 
onAuthStateChanged(auth,authUser =>{
  console.log('se ejecuto esta shit')
  console.log(authUser)
})
*/

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
