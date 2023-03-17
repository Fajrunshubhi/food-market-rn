import {act} from 'react-test-renderer';

const {createSlice} = require('@reduxjs/toolkit');

const initStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  address: '',
  city: '',
  houseNumber: '',
  phoneNumber: '',
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
    },
    setRegisterAddress(state, action) {
      state.push({
        address: action.payload.address,
        city: action.payload.city,
        houseNumber: action.payload.houseNumber,
        phoneNumber: action.payload.phoneNumber,
      });
    },
  },
});

const authRegisterAction = authRegisterSlice.actions;

export {authRegisterAction};
export {authRegisterSlice};
