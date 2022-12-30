import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { ICartState } from '../../entity/Carts'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartToggle: false,
    selectedCart: [],
  } as ICartState,
  reducers: {
    setCartToggle: (state, action) => {
      state.cartToggle = action.payload
    },
    selectCart: (state, action) => {
      state.selectedCart = [...state.selectedCart, action.payload]
    },
    removeCart: (state, action) => {
      state.selectedCart = state.selectedCart.filter(item => item !== action.payload)
    },
  },
})

export const { 
    setCartToggle, 
    selectCart,
    removeCart } = cartSlice.actions

export default cartSlice.reducer

export const selectCartToggle = (state: RootState): boolean => state.cart.cartToggle
export const selectSelectedCart = (state: RootState): number[] => state.cart.selectedCart