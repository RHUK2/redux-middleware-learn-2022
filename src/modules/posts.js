// api
import * as postsAPI from 'api/posts';
import { call, put, takeEvery } from 'redux-saga/effects';

// import {
//   createPromiseThunk,
//   handleAsyncActions,
//   reducerUtils,
// } from 'lib/asyncUtils';

// action (redux-thunk)
// export const getPosts = () => async (dispatch) => {
//   dispatch({ type: GET_POSTS });
//   try {
//     const posts = await postsAPI.getPosts();
//     dispatch({ type: GET_POSTS_SUCCESS, posts });
//   } catch (e) {
//     dispatch({ type: GET_POSTS_ERROR, error: e });
//   }
// };
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST });
//   try {
//     const post = await postsAPI.getPostById(id);
//     dispatch({ type: GET_POST_SUCCESS, post });
//   } catch (e) {
//     dispatch({ type: GET_POST_ERROR, error: e });
//   }
// };

// Action Label
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// Action
export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, id });

// Saga
function* getPostsSaga() {
  try {
    const posts = yield call(postsAPI.getPosts);
    yield put({
      type: GET_POSTS_SUCCESS,
      posts,
    });
  } catch (e) {
    yield put({
      type: GET_POSTS_ERROR,
      error: e,
    });
  }
}
function* getPostSaga(action) {
  try {
    console.log(action);
    const post = yield call(postsAPI.getPostById, action.id);
    yield put({
      type: GET_POST_SUCCESS,
      post,
    });
  } catch (e) {
    yield put({
      type: GET_POST_ERROR,
      error: e,
    });
  }
}

const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
  post: {
    loading: false,
    data: null,
    error: null,
  },
};

// Reducer
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          loading: false,
          data: action.posts,
          error: null,
        },
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    case GET_POST:
      return {
        ...state,
        post: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: {
          loading: false,
          data: action.post,
          error: null,
        },
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: {
          loading: false,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}

// action monitoring
export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
}

// Refactoring
// // action (redux-thunk)
// export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
// export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

// // init value
// const initialState = {
//   posts: reducerUtils.initial(),
//   post: reducerUtils.initial(),
// };

// // reducer
// export default function posts(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//     case GET_POSTS_SUCCESS:
//     case GET_POSTS_ERROR:
//       return handleAsyncActions(GET_POSTS, 'posts')(state, action);
//     case GET_POST:
//     case GET_POST_SUCCESS:
//     case GET_POST_ERROR:
//       return handleAsyncActions(GET_POST, 'post')(state, action);
//     default:
//       return state;
//   }
// }
