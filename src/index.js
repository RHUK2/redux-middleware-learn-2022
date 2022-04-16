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

// Create Saga
const sagaMiddleware = createSagaMiddleware();

// Create Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, sagaMiddleware, logger)),
);

// Saga Run
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById('root'),
);
