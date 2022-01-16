import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { delay, takeEvery } from 'redux-saga/effects';

export interface UserState {
  name: string;
}

const initialState: UserState = {
  name: 'none',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName(
      state,
      action: PayloadAction<{
        name: string;
      }>,
    ) {
      state.name = action.payload.name;
    },
  },
});

function* changeNameSaga(action: PayloadAction<UserState>) {
  try {
    yield console.log(action.payload);
  } catch (err) {
    console.dir(err);
  }
}

export function* userSaga() {
  yield takeEvery(user.actions.changeName.type, changeNameSaga);
}

export default user;
