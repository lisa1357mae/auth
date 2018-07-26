import React from 'react';
import ReactNative from 'react';
import { View, Text }  from 'react-native';




const CardSection = (props) => {

  return (
    <View style= {styles.containerStyle}>
    {props.children}
  </View>
  );
};

const styles = {
    containerStyle: {

    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#c4af25',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    postition: 'relative'
  }
};

export {CardSection};
