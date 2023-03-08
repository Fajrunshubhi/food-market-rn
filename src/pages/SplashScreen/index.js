import {Text, View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.textLogo}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

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
