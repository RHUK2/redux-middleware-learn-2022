import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CounterContainer from 'containers/CounterContainer';
import PostListContainer from 'containers/PostListContainer';
import PostContainer from 'containers/PostContainer';

function App() {
  return (
    <BrowserRouter>
      <CounterContainer />
      <Route exact path="/" component={PostListContainer} />
      <Route path="/:id" component={PostContainer} />
    </BrowserRouter>
  );
}

export default App;
