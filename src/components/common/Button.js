import React from 'react';
import ReactNative from 'react-native';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({ onPress, children }) => {


const {buttonStyle, textStyle} = styles;

  return (
<TouchableOpacity onPress={onPress} style={buttonStyle}>
<Text style ={textStyle}>
{children}
</Text>
</TouchableOpacity>
  );
};



const styles =  {


  textStyle: {

alignSelf: 'center',
color: 'black',
fontSize: 16,
fontWeight: '600',
paddingTop: 15,
height: 35

},
  buttonStyle: {

    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#cc6710',
    borderRadius: 5,
    borderWidth: 1,
    borderBottom: 5,
    borderColor: 'black',
    marginLeft: 5,
    marginRight: 5
  }
}

export { Button };
