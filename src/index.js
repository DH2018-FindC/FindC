import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';

// import firebase
let config = {
    apiKey: "AIzaSyAZaMPQd-aOdFZjOCJpMS8U_bwqnMAC-gU",
    authDomain: "findc-4a7e5.firebaseapp.com",
    databaseURL: "https://findc-4a7e5.firebaseio.com",
    projectId: "findc-4a7e5",
    storageBucket: "findc-4a7e5.appspot.com",
    messagingSenderId: "814470540647"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
