import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    this.state = {
      newAccName: '',
      newAccEmail: '',
      newAccPass: ''
    };



    return (
      <div className="text-center mt-5">
        <header id="headerContainer">
          {
            user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>
          }

          {
            user ? <button onClick={signOut} className="btn btn-primary">Sign out</button> : <button onClick={signInWithGoogle} className="btn btn-primary">Sign in with Google</button>
          }
          <br/>
          <button className="btn btn-primary mt-2" onClick={openForm}>Create account</button>
        </header>
          <form className="mt-5 container d-none" id="formContainer">
            <div className="form-group col-3 mx-auto">
              <label htmlFor="newAccName">Name</label>
              <input type="text" className="form-control" id={this.state.newAccName} placeholder="Name"/>
            </div>
            <div className="form-group col-3 mx-auto">
              <label htmlFor="newAccEmail">Email</label>
              <input type="email" className="form-control" id={this.state.newAccEmail} placeholder="Email"/>
            </div>
            <div className="form-group col-3 mx-auto">
              <label htmlFor="newAccPass">Password</label>
              <input type="password" className="form-control" id={this.state.newAccPass} placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.createAccount}>Create account</button>
            <button type="submit" className="ml-2 btn btn-danger" onClick={cancel}>Cancel</button>
          </form>
        </div>
    );

    this.createAccount= (e) =>{
      e.preventDefault();
      alert(document.getElementById('newAccName').vaulue);
      alert(document.getElementById('newAccEmail').vaulue);
      alert(document.getElementById('newAccPass').vaulue);
    
    }
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);


function openForm(){
  document.getElementById(`headerContainer`).classList.add(`d-none`);
  document.getElementById(`formContainer`).classList.remove(`d-none`);
}

function cancel(){
  document.getElementById(`formContainer`).classList.add(`d-none`);
  document.getElementById(`headerContainer`).classList.remove(`d-none`);
}