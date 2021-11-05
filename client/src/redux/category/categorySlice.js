import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: { id: 0, title: 'Drink' },
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    chooseCategory(state, action) {
      return {
        ...state,
        category: { id: action.payload.id, title: action.payload.title },
      };
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
