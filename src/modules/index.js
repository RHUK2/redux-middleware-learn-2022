import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import counter, { countersaga } from 'modules/counter';
import posts from 'modules/posts';

const rootReducer = combineReducers({ counter, posts });

export function* rootSaga() {
  yield all([countersaga()]);
}

export default rootReducer;
