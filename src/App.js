import React, {Component} from 'react';
import ReactNative from 'react-native';
import {View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyAPpZAvW3Qvwyhx1zSk6n_akZyWGl-fMwc',
    authDomain: 'authapp-69c16.firebaseapp.com',
    databaseURL: 'https://authapp-69c16.firebaseio.com',
    projectId: 'authapp-69c16',
    storageBucket: 'authapp-69c16.appspot.com',
    messagingSenderId: '628557173372'
  });

  }

render() {
  return (
    <View>

<Header  headerText="Authentication" />

<LoginForm />

    </View>
  );
}



}


export default App;
