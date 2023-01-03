import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import jwtDecode from 'jwt-decode'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: "", 
    role: "", 
    token: null, 
    modalToggle: false
  },
  reducers: {
    setCredentials: (state, action) => {
      const {access_token} = action.payload.data
      const userDetail = jwtDecode(access_token) as any
      state.token = access_token
      state.username = userDetail.username
      state.role = userDetail.role
    },
    logOut: (state) => {
      state.username = ""
      state.role = ""
      state.token = null
    },
    setModalToggle: (state, action) => {
      state.modalToggle = action.payload
    }
  },
})

export const {setCredentials, logOut, setModalToggle } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state: RootState): string => state.auth.username
export const selectCurrentRole = (state: RootState): string => state.auth.role
export const selectCurrentToken = (state: RootState): null | string => state.auth.token
export const selectModalToggle = (state: RootState): null | boolean => state.auth.modalToggle