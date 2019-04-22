import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.state = {};
  }

  render() {
    return (
      <div className="container"></div>
    );
  }
}

export default App;