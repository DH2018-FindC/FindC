import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';

// import firebase
const config = {
    apiKey: "AIzaSyD8Anz76IHcyo-qjmQYvKTjlpsrsUrRC_Y",
    authDomain: "findc-a96b0.firebaseapp.com",
    databaseURL: "https://findc-a96b0.firebaseio.com",
    projectId: "findc-a96b0",
    storageBucket: "findc-a96b0.appspot.com",
    messagingSenderId: "541313378309"
};
const serverURL = 'localhost:8080/?param=';
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
