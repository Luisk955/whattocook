import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDM61HS0dEVHTnUF6GLteiPk_DRLXr8Ejo",
  authDomain: "whattocook-a7b73.firebaseapp.com",
  databaseURL: "https://whattocook-a7b73.firebaseio.com",
  projectId: "whattocook-a7b73",
  storageBucket: "whattocook-a7b73.appspot.com",
  messagingSenderId: "514570919508",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  recipe = uid => this.db.ref(`recipes/${uid}`);

  recipes = () => this.db.ref('recipes');
}

export default Firebase;
