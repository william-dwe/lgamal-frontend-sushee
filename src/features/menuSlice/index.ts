import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IMenuQuery } from '../../entity/Menus'

const menuFilterSlice = createSlice({
  name: 'menuFilter',
  initialState: {
      filterQuery: {
        search: "",
        sort: "asc",
        sortBy: "id",
        filterByCategory: "meals,drinks,appetizers",
        limit: 0,
        page: 1,
      }
  },
  reducers: {
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload
    }
  },
})

export const { setFilterQuery } = menuFilterSlice.actions

export default menuFilterSlice.reducer

export const selectFilterQuery = (state: RootState): IMenuQuery => state.menu.filterQuery