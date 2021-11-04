import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalItems: 0,
  totalPrice: 0,
  coupons: [],
  tax: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      existingItem ? existingItem.quantity += 1 : state.items.unshift(action.payload);
    },
    updateQuantity(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      action.payload.status ? existingItem.quantity += 1 : existingItem.quantity -= 1;
    },
    removeItem(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },

  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
