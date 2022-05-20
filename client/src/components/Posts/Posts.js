import React from 'react';
import { Post } from './Post/Post';
import { useSelector } from 'react-redux';

export const Posts = () => {
  //? fecthing post from the global store
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      Posts
      <Post />
      <Post />
    </>
  );
};
