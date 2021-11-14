// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyBtyBQOl0cwbA1d1OZ0VauxLySYR_yuUg4",
  authDomain: "homework-tracking-d9095.firebaseapp.com",
  projectId: "homework-tracking-d9095",
  storageBucket: "homework-tracking-d9095.appspot.com",
  messagingSenderId: "927048212474",
  appId: "1:927048212474:web:75e4c28b52fc57cf95ce43",
  measurementId: "G-3FCF39N61L"
};

let app;
if(firebase.apps.length===0){
 app=firebase.initializeApp(firebaseConfig);
}
else{
  app=firebase.app();
}

const db =app.database("https://homework-tracking-d9095-default-rtdb.europe-west1.firebasedatabase.app/");
const auth=firebase.auth();

export {auth,db};