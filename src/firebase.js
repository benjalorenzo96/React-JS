import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANauMCcFt-9Uk4bLjl0OASzwjRcf4RLSw",
  authDomain: "proyecto-final-react-99859.firebaseapp.com",
  projectId: "proyecto-final-react-99859",
  storageBucket: "proyecto-final-react-99859.appspot.com",
  messagingSenderId: "693824862828",
  appId: "1:693824862828:web:6c9eaa563874786e8af649",
  measurementId: "G-BVRHQRTQEX"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener una instancia de Firestore
export const db = firebase.firestore();

