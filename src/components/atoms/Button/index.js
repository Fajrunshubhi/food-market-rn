import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <View style={styles.container(props.color)}>
        <Text style={styles.text(props.textColor)}>{props.buttonName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    textAlign: 'center',
    backgroundColor: color,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  }),
  text: textColor => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: textColor,
    // textAlign: 'center',
  }),
});
