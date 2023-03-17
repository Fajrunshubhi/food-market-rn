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
      state.push({
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        password_confirmation: action.payload.password_confirmation,
      });
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
