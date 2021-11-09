import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cartSlice';
import categoryReducer from './category/categorySlice';
import globalReducer from './global/globalSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    global: globalReducer,
  },
});

export default store;
