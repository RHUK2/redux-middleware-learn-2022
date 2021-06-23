import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import counter, { countersaga } from 'modules/counter';
import posts, { postsSaga } from 'modules/posts';

// reducer 묶음
export const rootReducer = combineReducers({ counter, posts });

// saga 묶음
export function* rootSaga() {
  yield all([countersaga(), postsSaga()]);
}
