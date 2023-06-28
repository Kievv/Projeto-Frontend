// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWrB2ybpqzga1DHZYi_IVCTFPRxLmodMY',
  authDomain: 'remedie-app.firebaseapp.com',
  projectId: 'remedie-app',
  storageBucket: 'remedie-app.appspot.com',
  messagingSenderId: '445857272653',
  appId: '1:445857272653:web:59d282ed9a239f0c569d04',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
