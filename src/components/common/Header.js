// Import libraries for making a Component

import React from 'react';
import ReactNative from 'react-native';
import {Text, View} from 'react-native';

//Make a component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};
//Make the component available to other parts of the app
const styles = {
viewStyle: {
  backgroundColor: '#cc6710',
  justifyContent: 'center',
  alignItems: 'center',
  height: 80,
  paddingTop: 15,
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 5},
  shadowOpacity: 0.5,
  elevation: 2,
  position: 'relative'

},
  textStyle: {
    color: 'black',
    fontSize: 20

}



};
export {Header};
