import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getPosts } from '../modules/post';
import BottomTab from '../components/common/BottomTab';
import TopTab from '../components/common/TopTab';

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
      <TopTab />
      <BottomTab />
    </MainContainer>
  );
};
const PostWrapper = styled.div`
  font-size: 1rem;
  color: #452bdb;
`;

const MainContainer = styled.div`
  width: 376px;
  height: 100%;
  background-color: red;
  display: grid;
  place-content: center;
`;
export default Home;
