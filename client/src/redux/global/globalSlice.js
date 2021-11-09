/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openNavbar: false,
  openCart: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setOpenNavbar(state, action) {
      state.openNavbar = action.payload;
    },
    setOpenCart(state, action) {
      state.openCart = action.payload;
    },
  },
});

export const globalActions = globalSlice.actions;

export default globalSlice.reducer;
