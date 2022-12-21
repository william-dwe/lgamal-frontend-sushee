import { configureStore } from '@reduxjs/toolkit';
import { apiSlices } from './api/apiSlice';
import authReducer from '../features/authSlice'
import userReducer from '../features/userSlice'
import logger from 'redux-logger';


export const store = configureStore({
  reducer: {
    [apiSlices.reducerPath]: apiSlices.reducer,
    auth: authReducer,
    user: userReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlices.middleware, logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;