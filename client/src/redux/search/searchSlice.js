import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SearchAPI } from '../../services/search';

const initialState = {
  searchText: '',
  foundItems: [],
};

export const searchFood = createAsyncThunk(
  'search/searchFood',
  async (searchText) => {
    const res = await SearchAPI.searchFood(searchText);
    console.log(res.data);
    return res.data;
  },
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText(state, action) {
      return {
        ...state,
        searchText: action.payload,
      };
    },
    clearSearchData(state) {
      return {
        ...state,
        searchText: '',
        foundItems: [],
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(searchFood.fulfilled, (state, action) => ({
      ...state,
      foundItems: action.payload,
    }));
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
