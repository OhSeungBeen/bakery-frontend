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
const MainContainer = styled.div`
  width: 378px;
  background-color: red;
  display: flex;
  justify-content: center;
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
      <MainContainer>
        <PostWrapper>fddsf</PostWrapper>
      </MainContainer>
    </>
  );
};

export default Home;
