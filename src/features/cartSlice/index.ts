import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartToggle: false,
  },
  reducers: {
    setCartToggle: (state, action) => {
      state.cartToggle = action.payload
    }
  },
})

export const { setCartToggle } = cartSlice.actions

export default cartSlice.reducer

export const selectCartToggle = (state: RootState): boolean => state.cart.cartToggle