import * as firebase from 'firebase';

const db = firebase.initializeApp({

        apiKey: "AIzaSyA6F0lEKZbsO2DnEpvoZmWYaJpjpkesnKQ",
        authDomain: "cse110firebase-18162.firebaseapp.com",
        databaseURL: "https://cse110firebase-18162.firebaseio.com",
        projectId: "cse110firebase-18162",
        storageBucket: "cse110firebase-18162.appspot.com",
        messagingSenderId: "332827394432",
        appId: "1:332827394432:web:e44d85be36cd050c330165",
        measurementId: "G-5FWMB81LJQ"

});

export default db
export const provider2 = new firebase.auth.GoogleAuthProvider()
export const provider = new firebase.auth.FacebookAuthProvider()