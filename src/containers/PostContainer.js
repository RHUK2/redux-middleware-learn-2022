import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getPost } from 'modules/posts';

import Post from 'components/Post';
import { useParams } from 'react-router-dom';

function PostContainer() {
  const { loading, data, error } = useSelector((state) => {
    return state.posts.post;
  });
  const dispatch = useDispatch();
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    dispatch(getPost(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <Post post={data} />;
}

export default PostContainer;
