import React, {Component} from 'react';
import ReactNative from 'react-native';
import {View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {  loggedIn: null   };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyAPpZAvW3Qvwyhx1zSk6n_akZyWGl-fMwc',
    authDomain: 'authapp-69c16.firebaseapp.com',
    databaseURL: 'https://authapp-69c16.firebaseio.com',
    projectId: 'authapp-69c16',
    storageBucket: 'authapp-69c16.appspot.com',
    messagingSenderId: '628557173372'
  });
//event handler function to show if the user logs in or out
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    this.setState({loggedIn: true});
} else {
    this.setState({ loggedIn: false });
    }
  });
}

//helper function
renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
        Log Out
      </Button>
      );
    case false:
      return <LoginForm />;
    default:
      return <Spinner size="large"   />;

    }
}



render() {
  return (

    <View>
      <Header  headerText="Authentication" />
      {this.renderContent()}
    </View>
    );
  }
}


export default App;
