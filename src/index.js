import React from 'react';
import ReactDOM from 'react-dom';
// store, reducer
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from 'modules';
// middleware
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import GlobalStyle from 'components/GlobalStyle';
import App from 'components/App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById('root'),
);
