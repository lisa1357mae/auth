import React from 'react';
import ReactNative from 'react-native';
import {View, Text} from 'react-native';



const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>  //container
  );
};


const styles = {

  containerStyle: {

      borderWidth: 3,
      borderRadius: 5,
      borderColor: 'black',
      backgroundColor: 'black',
      borderBottomWidth: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 4,
      paddingTop: 2,
      paddingBottom: 2,

    }
};

export {Card};
