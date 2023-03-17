import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Header, TextInput, Button, Gap} from '../../components';
import {useForm} from '../../utils';
import axios from 'axios';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form: ', form);
    axios
      .post('http://foodmarket-backend.buildwithangga.id/api/login', form)
      .then(res => {
        console.log('success: ', res);
      })
      .catch(err => {
        console.log('error: ', err);
      });
  };

  return (
    <View style={styles.pages}>
      <Header title="Sign In" subTitle="Find Your Best Ever Meal!" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type Your Password"
          value={form.password}
          secureTextEntry
          onChangeText={value => setForm('password', value)}
        />
        <Gap height={24} />
        <Button
          buttonName="Sign In"
          color="#FFC700"
          textColor="#020202"
          onPress={onSubmit}
        />
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
