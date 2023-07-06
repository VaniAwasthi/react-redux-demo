import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../screens/movies/reducer';
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;