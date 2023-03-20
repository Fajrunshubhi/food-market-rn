import {configureStore} from '@reduxjs/toolkit';
import {authPhotoSlice, authRegisterSlice} from './reducer/auth';
import {globalSlice} from './reducer/global';
import {homeSlice} from './reducer/home';

const store = configureStore({
  reducer: {
    register: authRegisterSlice.reducer,
    global: globalSlice.reducer,
    photo: authPhotoSlice.reducer,
    food: homeSlice.reducer,
  },
});

export default store;
