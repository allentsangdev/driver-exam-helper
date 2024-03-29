import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import { getFirestore } from "firebase/firestore"

export const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
})

export const auth = app.auth()

export const db = getFirestore(app)

export default app