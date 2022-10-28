import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAOsEHdGG85GT_BFzDwP-mPzfUhv54ejhE",
  authDomain: "prueba-react-6d5d5.firebaseapp.com",
  projectId: "prueba-react-6d5d5",
  storageBucket: "prueba-react-6d5d5.appspot.com",
  messagingSenderId: "624459523178",
  appId: "1:624459523178:web:3f9b3e588e8e6c45905613"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

