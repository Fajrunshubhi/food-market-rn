const {createSlice} = require('@reduxjs/toolkit');

const initHome = {
  food: [],
};

const homeSlice = createSlice({
  name: 'food',
  initialState: initHome,
  reducers: {
    setFood(state, action) {
      state.food = action.payload;
    },
  },
});

const homeSliceAction = homeSlice.actions;
export {homeSliceAction};
export {homeSlice};
