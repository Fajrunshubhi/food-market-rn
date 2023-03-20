import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, TextInput, Gap, Button, Select} from '../../components';
import {useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import setLoading from '../../redux/action/global';
import {signUpAction} from '../../redux/action';

const SignUpAddress = ({navigation}) => {
  const dispatch = useDispatch();
  const register = useSelector(state => state.register);
  const photoReducer = useSelector(state => state.photo);
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Jakarta',
  });

  const onSubmit = () => {
    console.log('form :', form);
    const data = {...form, ...register};
    console.log('data register: ', data);
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.pages}>
        <Header
          title="Address"
          subTitle="Make sure it’s valid"
          onBack={() => {}}
          onPress={() => navigation.navigate('SignUp')}
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
