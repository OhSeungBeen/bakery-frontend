import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import reducer from '.';

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const wrapper = createWrapper(() => store, {
  debug: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
