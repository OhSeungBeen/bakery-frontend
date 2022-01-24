import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getPosts } from '../modules/post';
import BottomTab from '../components/common/BottomTab';
import TopTab from '../components/common/TopTab';
import BreadStore from '../components/breadstore/BreadStore';
import Search from '../components/search/Search';
import styled from 'styled-components';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.post.data);

  const [tab, setTab] = useState<number>(1);

  const onClick = () => {
    dispatch(getPosts());
  };

  const renderTab = () => {
    switch (tab) {
      case 1:
        return <BreadStore />;
      case 2:
        return <Search />;

      // some other cases

      default:
        return <></>;
    }
  };

  return (
    <>
      <Head>
        <title>Bakery | Home</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopTab />
      <ContentContainer>{renderTab()}</ContentContainer>
      <BottomTab setTab={setTab} />
    </>
  );
};

const ContentContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 60px;
`;
export default Home;
