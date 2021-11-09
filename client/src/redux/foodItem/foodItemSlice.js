/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const foodItemSlice = createSlice({
  name: 'foodItem',
  initialState,
  reducers: {
    setFoodItem(state, action) {
      state.items = action.payload;
    },
  },
});

export const foodItemActions = foodItemSlice.actions;

export default foodItemSlice.reducer;
