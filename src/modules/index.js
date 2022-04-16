import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import counter, { countersaga } from 'modules/counter';
import posts, { postsSaga } from 'modules/posts';

// Combine Reducer
export const rootReducer = combineReducers({ counter, posts });

// Combine Saga
export function* rootSaga() {
  yield all([countersaga(), postsSaga()]);
}
