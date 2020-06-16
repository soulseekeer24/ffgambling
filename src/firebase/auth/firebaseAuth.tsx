import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAhBOrohdZvQv6a6ENDHe-wPee9Ns2LZJQ",
    authDomain: "ffgam-20860.firebaseapp.com",
    databaseURL: "https://ffgam-20860.firebaseio.com",
    projectId: "ffgam-20860",
    storageBucket: "ffgam-20860.appspot.com",
    messagingSenderId: "707788525316",
    appId: "1:707788525316:web:4388c854ac3860f12dca51"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;