import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from 'modules';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import App from 'components/App';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
