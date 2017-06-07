import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDc9PCSCAq8-tRODqcBlDlH9LBpRhXYD5U",
    authDomain: "lunch-app-e0db3.firebaseapp.com",
    databaseURL: "https://lunch-app-e0db3.firebaseio.com",
    projectId: "lunch-app-e0db3",
    storageBucket: "lunch-app-e0db3.appspot.com",
    messagingSenderId: "844859420211"
  };

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
