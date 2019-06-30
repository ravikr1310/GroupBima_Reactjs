import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDGLk25gl2mzjFnvBzRLKashNDoRCe3P0s",
    authDomain: "groupbima-2019.firebaseapp.com",
    databaseURL: "https://groupbima-2019.firebaseio.com",
    projectId: "groupbima-2019",
    storageBucket: "",
    messagingSenderId: "124143290454",
    appId: "1:124143290454:web:5fb699271281a290"
}
const fire = firebase.initializeApp(config);
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
export default fire;