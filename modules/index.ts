import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import post, { PostState } from './post';

export type RootState = {
  post: PostState;
};

const reducer: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({ post: post.reducer })(state, action);
};

export default reducer;
