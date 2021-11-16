import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  methodPayment: '',
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      // eslint-disable-next-line max-len
      existingItem ? existingItem.quantity += action.payload.quantity : state.items.unshift(action.payload);
    },
    updateQuantity(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      action.payload.increase ? existingItem.quantity += 1 : existingItem.quantity -= 1;
    },
    removeItem(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
    chooseMethodPayment(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.methodPayment = action.payload;
    },
    initCart(state) {
      // eslint-disable-next-line no-param-reassign
      state.items = [];
      // eslint-disable-next-line no-param-reassign
      state.methodPayment = '';
    },

  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
