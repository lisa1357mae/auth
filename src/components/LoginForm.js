import React, {Component} from 'react';
import {Text, View, Modal, TouchableHighLight, Image} from 'react-native';
import firebase from 'firebase';
import ReactNative from 'react-native';
import Deck from 'react-native-swiper-deck';
import { Button, Card, CardSection, Input, Spinner } from './common';

const DATA = [

  { id: 1, text: 'Card #1', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heart_anterior_exterior_view.jpg/1200px-Heart_anterior_exterior_view.jpg' },
//  { id: 1, text: 'Card #1', image: require('../images/AnthrowareLogo.png')},
  //{ id: 2, text: 'Card #2', image: require('../assets/exc.png') },
  { id: 3, text: 'Card #3', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Milky_Way_Arch.jpg/512px-Milky_Way_Arch.jpg.png' },
    { id: 4, text: 'Card #4', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Milky_Way_IR_Spitzer.jpg/512px-Milky_Way_IR_Spitzer.jpg.png' },
];

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false,   modalVisible: false, };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

onButtonPress() {
  const {email, password} = this.state;

  this.setState({error: '', loading: true});


  //attempt to log the user in
  firebase.auth().signInWithEmailAndPassword(email, password)
  //if successful, logs the user in
  .then(this.onLoginSuccess.bind(this))
  //one of two forms is incorrect - now we prompt to make a new user account
  .catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    //upon succesful creation this logs the user in and clears the fields
      .then(this.onLoginSuccess.bind(this))
      // if still incorrect we call the fail error
      .catch(this.onLoginFail.bind(this));
    });
}


onLoginFail() {
  this.setState({error: 'Authentication Failed', loading: false });
}

onLoginSuccess() {
  this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

renderButton() {

  if  (this.state.loading)  {
return <Spinner size="small" />;

  }

  return (
    <Button onPress={this.onButtonPress.bind(this)}>
      Log in
    </Button>
  );
}

  render() {
    return (
  <Card>

        <CardSection >
          <Input
              placeholder="user@gmail.com"
              label="Email"
              value={this.state.text}
              onChangeText={email => this.setState({ email })}
            />
      </CardSection>

  <CardSection>
    <Input
      secureTextEntry
      label="Password"
      placeholder="password"
      value={this.state.password}
      onChangeText={password => this.setState({password})}
      />
  </CardSection>

  <Text style= {styles.errorTextStyle}>
      {this.state.error}
  </Text>

    <CardSection>
        {this.renderButton()}
    </CardSection>


<View style={{  flex: 1 }}>
  <View style={{flex:1}}>
  <Modal
    animationType="slide"
    transparent={false}
    visible={this.state.modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
    }}>
    <View style={{marginTop: 22, backgroundColor: 'red'}}>
      <View style= {{backgroundColor: 'green'}}>
        <Text>Hello World!</Text>


          <Deck
            swipeOrientation='horiz'
            data={DATA}
          />


        <Button
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <Text>Hide Modal</Text>
        </Button>

    </View>
    </View>
  </Modal>

  <Button
    onPress={() => {
      this.setModalVisible(true);
    }}>
    <Text>Show Modal</Text>
  </Button>
</View>



  </View>


  </Card>


    );
  }
}


const styles = {

  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;
