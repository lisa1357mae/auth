import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import ReactNative from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';



class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };


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
      </CardSection >

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
