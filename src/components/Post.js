import React from 'react';

function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.body}</h2>
    </div>
  );
}

export default Post;
