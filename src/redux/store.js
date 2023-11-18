// store.js
import { configureStore } from '@reduxjs/toolkit';
import fromReducer from './formSlice';

const store = configureStore({
  reducer: {
    fromData: fromReducer,
    // Add other slices here if needed
  },
});

export default store;
