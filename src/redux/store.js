import {configureStore} from '@reduxjs/toolkit';
import {authRegisterSlice} from './reducer/auth';
import {globalSlice} from './reducer/global';

const store = configureStore({
  reducer: {
    register: authRegisterSlice.reducer,
    global: globalSlice.reducer,
  },
});

export default store;
