import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({color = '#FFC700', buttonName, onPress, textColor}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{buttonName}</Text>
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
