import {createSlice} from '@reduxjs/toolkit';
import {create} from 'react-test-renderer';

const initGlobalState = {
  isError: false,
  message: 'Error',
};

const globalSlice = createSlice({
  name: 'global',
  initialState: initGlobalState,
  reducers: {
    setError(state, action) {
      state.push({
        isError: action.payload.isError,
        message: action.payload.message,
      });
    },
  },
});

const globalAction = globalSlice.actions;

export {globalAction};
export {globalSlice};
