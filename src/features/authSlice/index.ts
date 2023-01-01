import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null, token: null, modalToggle: false},
  reducers: {
    setCredentials: (state, action) => {
      const {user, access_token} = action.payload.data
      state.user = user
      state.token = access_token
    },
    logOut: (state) => {
      state.user = null
      state.token = null
    },
    setModalToggle: (state, action) => {
      state.modalToggle = action.payload
    }
  },
})

export const {setCredentials, logOut, setModalToggle } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: RootState): null | string => state.auth.user
export const selectCurrentToken = (state: RootState): null | string => state.auth.token
export const selectModalToggle = (state: RootState): null | boolean => state.auth.modalToggle