import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCs3JzAZNZILJK6JLgx-pwC2DG3sG8zzaE",
    authDomain: "signup-auth-849a7.firebaseapp.com",
    projectId: "signup-auth-849a7",
    storageBucket: "signup-auth-849a7.appspot.com",
    messagingSenderId: "827453307504",
    appId: "1:827453307504:web:1bbe25e56eede2b06452b5"
  };
  const app=initializeApp(firebaseConfig);

  export const auth=getAuth(app);