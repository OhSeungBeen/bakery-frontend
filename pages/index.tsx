import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getPosts } from '../modules/post';

const PostWrapper = styled.div`
  font-size: 1rem;
  color: #452bdb;
`;

const PostItemWrapper = styled.span`
  margin: 0.5rem;
`;

const ButtonWrapper = styled.button`
  font-size: 1rem;
  background-color: white;
  border: 1px solid;
`;

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.post.data);

  const onClick = () => {
    dispatch(getPosts());
  };

  return (
    <>
      <Head>
        <title>Bakery | Home</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ButtonWrapper onClick={(e) => onClick()}>API 호출</ButtonWrapper>
      {posts &&
        posts.map((post) => (
          <PostWrapper key={post.id}>
            <PostItemWrapper>id: {post.id}</PostItemWrapper>
            <PostItemWrapper>title: {post.title}</PostItemWrapper>
          </PostWrapper>
        ))}
    </>
  );
};

export default Home;
