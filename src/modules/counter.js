import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// redux-thunk
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

const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* countersaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

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
