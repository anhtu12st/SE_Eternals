import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalItems: 0,
	totalPrice: 0,
	coupons: [],
	tax: 0,
	items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
  },
})

export const { x } = cartSlice.actions

export default cartSlice.reducer