import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';

const SplachScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.textLogo}>FoodMarket</Text>
    </View>
  );
};

export default SplachScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 32,
    color: '#020202',
    marginTop: 30,
    fontFamily: 'Poppins-Medium',
  },
});
