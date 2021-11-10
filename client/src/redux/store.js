import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cartSlice';
import categoryReducer from './category/categorySlice';
import globalReducer from './global/globalSlice';
import searchReducer from './search/searchSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    global: globalReducer,
    search: searchReducer,
  },
});

export default store;
