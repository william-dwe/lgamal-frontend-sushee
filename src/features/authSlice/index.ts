import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null},
  reducers: {
    setCredentials: (state, action) => {
      const {user, access_token} = action.payload.data
      state.user = user
      state.token = access_token
    },
    logOut: (state) => {
      state.user = null
      state.token = null
    }
  },
})

export const {setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: RootState): null | string => state.auth.user
export const selectCurrentToken = (state: RootState): null | string => state.auth.token