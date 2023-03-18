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
      const newAddress = action.payload;
      state.address = newAddress.address;
      state.city = newAddress.city;
      state.houseNumber = newAddress.houseNumber;
      state.phoneNumber = newAddress.phoneNumber;
    },
  },
});

const authRegisterAction = authRegisterSlice.actions;

export {authRegisterAction};
export {authRegisterSlice};
