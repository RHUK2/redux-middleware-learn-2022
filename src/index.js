import React from 'react';
import ReactDOM from 'react-dom';
// store, reducer, saga
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer, rootSaga } from 'modules';
// middleware
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
// components
import GlobalStyle from 'components/GlobalStyle';
import App from 'components/App';

// 사가 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

// 스토어 생성
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, sagaMiddleware, logger)),
);

// 사가 액션 모니터링 시작
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  // 스토어 제공
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById('root'),
);
