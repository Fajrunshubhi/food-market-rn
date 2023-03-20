import axios from 'axios';
import setLoading from './global';
import {ShowMessage, storeData} from '../../utils';
import {API_HOST} from '../../config';

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    axios
      .post(`${API_HOST.url}/register`, dataRegister)
      .then(res => {
        // menyimpan data user
        const profile = res.data.data.user;

        // menyimpan data token
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        storeData('token', {
          value: token,
        });
        if (photoReducer.isUploadPhoto) {
          const photoUpload = new FormData();
          photoUpload.append('file', photoReducer);
          axios
            .post(`${API_HOST.url}/user/photo`, photoUpload, {
              headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data',
              },
            })
            .then(resUpload => {
              profile.profile_photo_url = `https://foodmarket-backend.buildwithangga.id/storage/${resUpload.data.data[0]}`;
              storeData('userProfile', profile);
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            })
            .catch(err => {
              ShowMessage(
                err?.response?.data?.message,
                'danger',
                '#D9435E',
                'white',
              );
              navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
            });
        } else {
          storeData('userProfile', profile);
          navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
        }

        dispatch(setLoading(false));
        ShowMessage('Register Success', 'success', 'green', 'white');
      })
      .catch(err => {
        dispatch(setLoading(false));
        ShowMessage(err?.response?.data?.message, 'danger', '#D9435E', 'white');
      });
  };

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  axios
    .post(`${API_HOST.url}/login`, form)
    .then(res => {
      // menyimpan data user
      const profile = res.data.data.user;
      // menyimpan data token
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      dispatch(setLoading(false));
      storeData('token', {value: token});
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      ShowMessage(`Login failed ${err}`, 'danger', '#D9435E', 'white');
    });
};
