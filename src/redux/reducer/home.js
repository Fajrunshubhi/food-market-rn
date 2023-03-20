const {createSlice} = require('@reduxjs/toolkit');

const initHome = {
  food: [],
  newTaste: [],
  popular: [],
  recommended: [],
};

const homeSlice = createSlice({
  name: 'food',
  initialState: initHome,
  reducers: {
    setFood(state, action) {
      state.food = action.payload;
    },
    setFoodNewTaste(state, action) {
      state.newTaste = action.payload;
    },
    setFoodPopular(state, action) {
      state.popular = action.payload;
    },
    setFoodRecommended(state, action) {
      state.recommended = action.payload;
    },
  },
});

const homeSliceAction = homeSlice.actions;
export {homeSliceAction};
export {homeSlice};
