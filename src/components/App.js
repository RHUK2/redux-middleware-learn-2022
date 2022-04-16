import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CounterContainer from 'containers/CounterContainer';
import PostListContainer from 'containers/PostListContainer';
import PostContainer from 'containers/PostContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostListContainer />} />
        <Route path="/:id" element={<PostContainer />} />
      </Routes>
      <CounterContainer />
    </BrowserRouter>
  );
}

export default App;
