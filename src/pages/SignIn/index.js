import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, TextInput, Button, Gap} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header title="Sign In" subTitle="Find Your Best Ever Meal!" />
      <View style={styles.container}>
        <TextInput
          labelInput="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput labelInput="Password" placeholder="Type Your Password" />
        <Gap height={24} />
        <Button buttonName="Sign In" color="#FFC700" textColor="#020202" />
        <Gap height={12} />
        <Button
          buttonName="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
