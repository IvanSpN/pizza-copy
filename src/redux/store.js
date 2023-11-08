import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import vareniki from './slices/varenikiSlice';

export const store = configureStore({
  reducer: { filter, cart, vareniki },
});
