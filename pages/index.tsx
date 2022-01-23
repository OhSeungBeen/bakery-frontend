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

const MainContainer = styled.div`
  width: 378px;
  height: 300px;
  background-color: red;
  display: grid;
  place-content: center;
`;
const Home: NextPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.post.data);

  const onClick = () => {
    dispatch(getPosts());
  };

  return (
    <MainContainer>
      <Head>
        <title>Bakery | Home</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostWrapper>fddsf</PostWrapper>
    </MainContainer>
  );
};

export default Home;
