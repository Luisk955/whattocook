import * as firebase from 'firebase';
import firestore from 'firebase/firestore'


const config = {
    apiKey: "AIzaSyDM61HS0dEVHTnUF6GLteiPk_DRLXr8Ejo",
    authDomain: "whattocook-a7b73.firebaseapp.com",
    databaseURL: "https://whattocook-a7b73.firebaseio.com",
    projectId: "whattocook-a7b73",
    storageBucket: "whattocook-a7b73.appspot.com",
    messagingSenderId: "514570919508"
};

firebase.initializeApp(config);

firebase.firestore();

export default firebase;