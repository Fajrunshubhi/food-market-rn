import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput, Gap, Button} from '../../components';
import {useSelector} from 'react-redux';

const SignUp = ({navigation}) => {
  const globalState = useSelector(state => state.global);
  console.log('global', globalState);
  return (
    <View style={styles.pages}>
      <Header
        title="Sign Up"
        subTitle="Register and eat!"
        onBack={() => {}}
        onPress={() => navigation.navigate('SignIn')}
      />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <Text>{`status error:  ${globalState.isError}`}</Text>
        <TextInput labelInput="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          labelInput="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput labelInput="Password" placeholder="Type Your Password" />
        <Gap height={24} />
        <Button
          buttonName="Continue"
          color="#FFC700"
          textColor="#020202"
          onPress={() => navigation.navigate('SignUpAddress')}
        />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUp;

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
  photo: {
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 26,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    padding: 25,
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  addPhoto: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
