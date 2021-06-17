import React from 'react';

import GlobalStyle from 'components/GlobalStyle';
import CounterContainer from 'containers/CounterContainer';
import PostListContainer from 'containers/PostListContainer';

function App() {
  return (
    <>
      <CounterContainer />
      <PostListContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
