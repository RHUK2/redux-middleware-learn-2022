import React from 'react';
import ReactDOM from 'react-dom';
// store, reducer
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'modules';
// middleware
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import App from 'components/App';

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
