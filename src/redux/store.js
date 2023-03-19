import {configureStore} from '@reduxjs/toolkit';
import {authPhotoSlice, authRegisterSlice} from './reducer/auth';
import {globalSlice} from './reducer/global';

const store = configureStore({
  reducer: {
    register: authRegisterSlice.reducer,
    global: globalSlice.reducer,
    photo: authPhotoSlice.reducer,
  },
});

export default store;
