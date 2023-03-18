import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, TextInput, Gap, Button, Select} from '../../components';
import {useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {authRegisterAction} from '../../redux/reducer/auth';
import axios from 'axios';
import {useSelector} from 'react-redux';

const SignUpAddress = ({navigation}) => {
  const dispatch = useDispatch();
  const register = useSelector(state => state.register);
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Your city',
  });

  const onSubmit = () => {
    console.log('form : ', form);
    dispatch(authRegisterAction.setRegisterAddress(form));
    console.log('register: ', register);
    const data = {...register};
    console.log('data: ', data);
    axios
      .post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then(res => {
        console.log('Data success: ', res.data);
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        console.log('sign up error: ', err);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.pages}>
        <Header
          title="Address"
          subTitle="Make sure it’s valid"
          onBack={() => {}}
          onPress={() => navigation.navigate('SignIn')}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={16} />
          <Button
            buttonName="Sign Up Now"
            color="#FFC700"
            textColor="#020202"
            onPress={onSubmit}
          />
          <Gap height={12} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  scroll: {flexGrow: 1},
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
