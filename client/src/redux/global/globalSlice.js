/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openNavbar: false,
  openCart: false,
  openFoodItemModal: false,
  openCartPayment: false,
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
    setOpenCartPayment(state, action) {
      state.openCartPayment = action.payload;
    },
    setOpenFoodItemModal(state, action) {
      state.openFoodItemModal = action.payload;
    },
    setInit() {
      return initialState;
    },
  },
});

export const globalActions = globalSlice.actions;

export default globalSlice.reducer;
