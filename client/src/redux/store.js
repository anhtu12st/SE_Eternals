import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cartSlice';
import categoryReducer from './category/categorySlice';
import globalReducer from './global/globalSlice';
import searchReducer from './search/searchSlice';
import foodItemReducer from './foodItem/foodItemSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    global: globalReducer,
    search: searchReducer,
    foodItem: foodItemReducer,
  },
});

export default store;
