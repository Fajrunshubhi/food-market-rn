import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  PermissionsAndroid,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Header, TextInput, Gap, Button} from '../../components';
import {ShowMessage, useForm} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {authPhotoAction, authRegisterAction} from '../../redux/reducer/auth';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const register = useSelector(state => state.register);
  const [photo, setPhoto] = useState('');
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  // const requestCameraPermission = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.CAMERA,
  //         {
  //           title: 'Camera Permission',
  //           message: 'App needs camera permission',
  //         },
  //       );
  //       // if camera permission is granted
  //       return granted === PermissionsAndroid.RESULTS.GRANTED;
  //     } catch (err) {
  //       console.warn(err);
  //       return false;
  //     }
  //   } else {
  //     return true;
  //   }
  // };
  // const requestExternalWritePermission = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         {
  //           title: 'External Storage Write Permission',
  //           message: 'App needs write permission',
  //         },
  //       );
  //       // if write external storage permission is granted
  //       return granted === PermissionsAndroid.RESULTS.GRANTED;
  //     } catch (err) {
  //       console.warn(err);
  //       Alert('Write permission err', err);
  //     }
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  // const captureImage = async type => {
  //   let options = {
  //     mediaType: type,
  //     maxWidth: 300,
  //     maxHeight: 550,
  //     quality: 1,
  //     videoQuality: 'low',
  //     durationLimit: 30, //Video max duration in seconds
  //     saveToPhotos: true,
  //   };
  //   let isCameraPermitted = await requestCameraPermission();
  //   let isStoragePermitted = await requestExternalWritePermission();
  //   if (isCameraPermitted && isStoragePermitted) {
  //     launchCamera(options, response => {
  //       console.log('Response = ', response);

  //       if (response.didCancel) {
  //         Alert('User cancelled camera picker');
  //         return;
  //       } else if (response.errorCode === 'camera_unavailable') {
  //         Alert('Camera not available on device');
  //         return;
  //       } else if (response.errorCode === 'permission') {
  //         Alert('Permission not satisfied');
  //         return;
  //       } else if (response.errorCode === 'others') {
  //         Alert(response.errorMessage);
  //         return;
  //       }
  //       console.log('base64 -> ', response.base64);
  //       console.log('uri -> ', response.uri);
  //       console.log('width -> ', response.width);
  //       console.log('height -> ', response.height);
  //       console.log('fileSize -> ', response.fileSize);
  //       console.log('type -> ', response.type);
  //       console.log('fileName -> ', response.fileName);
  //       // setFilePath(response);
  //     });
  //   }
  // };

  const chooseFile = () => {
    let options = {
      maxWidth: 200,
      maxHeight: 200,
      quality: 0.5,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        ShowMessage(
          'User cancelled camera picker',
          'danger',
          '#D9435E',
          'white',
        );
        return;
      } else if (response.errorCode === 'camera_unavailable') {
        ShowMessage(
          'Camera not available on device',
          'danger',
          '#D9435E',
          'white',
        );
        return;
      } else if (response.errorCode === 'permission') {
        ShowMessage('Permission not satisfied', 'danger', '#D9435E', 'white');
        return;
      } else if (response.errorCode === 'others') {
        return;
      } else {
        const source = {uri: response.assets[0].uri};

        const dataImage = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        setPhoto(source);
        dispatch(authPhotoAction.setPhoto(dataImage));
        dispatch(authPhotoAction.setUploadStatus(true));
      }
      // console.log('base64 -> ', response.assets);
      // console.log('uri -> ', response.assets.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
    });
  };

  const onSubmit = () => {
    dispatch(authRegisterAction.setRegister(form));
    navigation.navigate('SignUpAddress');
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.pages}>
        <Header
          title="Sign Up"
          subTitle="Register and eat!"
          onBack={() => {}}
          onPress={() => navigation.navigate('SignIn')}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={chooseFile}>
              <View style={styles.borderPhoto}>
                {photo !== '' ? (
                  <Image style={styles.photoContainer} source={photo} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />
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
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={24} />
          <Button
            buttonName="Continue"
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

export default SignUp;

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
