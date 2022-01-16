import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import user, { userSaga, UserState } from './user';

export type RootState = {
  user: UserState;
};

const rootReducer = combineReducers({
  user: user.reducer,
});

export function* rootSaga() {
  yield all([userSaga()]);
}

export default rootReducer;
