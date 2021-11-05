import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cartSlice';
import categoryReducer from './category/categorySlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
  },
});

export default store;
