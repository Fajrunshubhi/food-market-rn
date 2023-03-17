import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Header, TextInput, Gap, Button, Select} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.pages}>
      <Header
        title="Address"
        subTitle="Make sure it’s valid"
        onBack={() => {}}
        onPress={() => navigation.navigate('SignIn')}
      />
      <View style={styles.container}>
        <TextInput
          labelInput="Phone No."
          placeholder="Type your phone number"
        />
        <Gap height={16} />
        <TextInput labelInput="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput labelInput="House No." placeholder="Type your address" />
        <Gap height={16} />
        <Select label="City" />
        <Gap height={16} />
        <Button
          buttonName="Sign Up Now"
          color="#FFC700"
          textColor="#020202"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUpAddress;

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
