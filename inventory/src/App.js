import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';


import Inventory from './Components/Inventory';
import SignIn from './Components/SignIn';
import SignOut from './Components/SignOut';

firebase.initializeApp({
    apiKey: "AIzaSyBA8uj_iKA_K_lXsFCN-DDwmYVz6N1vB8U",
    authDomain: "inventory-9c6c2.firebaseapp.com",
    databaseURL: "https://inventory-9c6c2-default-rtdb.firebaseio.com",
    projectId: "inventory-9c6c2",
    storageBucket: "inventory-9c6c2.appspot.com",
    messagingSenderId: "646321935740",
    appId: "1:646321935740:web:87d50b196f15fea70780f9"
});

const auth = firebase.auth();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <SignOut/>
      </header>
      <section>
        {user ? <Inventory/> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
