const {createSlice} = require('@reduxjs/toolkit');

const initStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};
const authRegisterSlice = createSlice({
  name: 'register',
  initialState: initStateRegister,
  reducers: {
    setRegister(state, action) {
      const newAcc = action.payload;
      state.name = newAcc.name;
      state.email = newAcc.email;
      state.password = newAcc.password;
      state.password_confirmation = newAcc.password;
    },
  },
});

const initPhoto = {
  uri: '',
  type: '',
  name: '',
  isUploadPhoto: false,
};
const authPhotoSlice = createSlice({
  name: 'authPhoto',
  initialState: initPhoto,
  reducers: {
    setPhoto(state, action) {
      const dataImage = action.payload;
      state.uri = dataImage.uri;
      state.type = dataImage.type;
      state.name = dataImage.name;
    },
    setUploadStatus(state, action) {
      state.isUploadPhoto = action.payload;
    },
  },
});

const authRegisterAction = authRegisterSlice.actions;
const authPhotoAction = authPhotoSlice.actions;

export {authRegisterAction, authPhotoAction};
export {authRegisterSlice, authPhotoSlice};
