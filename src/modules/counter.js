import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// action (redux-thunk)
// export const increaseAsync = () => {
//   return (dispatch) => {
//     setTimeout(() => dispatch(increase()), 1000);
//   };
// };
// export const decreaseAsync = () => {
//   return (dispatch) => {
//     setTimeout(() => dispatch(decrease()), 1000);
//   };
// };

// Action Label
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

// Action
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

// Saga
function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

const initialState = 0;

// Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

// action monitoring saga
export function* countersaga() {
  // action 모니터링, 모든 행동 동작
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // action 모니터링, 마지막 행동만 동작
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
