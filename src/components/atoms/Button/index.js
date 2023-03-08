import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.buttonName}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    backgroundColor: '#FFC700',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    // textAlign: 'center',
  },
});
