import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {menuDetail: null},
  reducers: {
    setMenu: (state, action) => {
      const {menu} = action.payload.data
      state.menuDetail = menu
    }
  },
})

export const { setMenu } = menuSlice.actions

export default menuSlice.reducer

export const selectCurrentMenu = (state: RootState): null | string => state.menu.menuDetail