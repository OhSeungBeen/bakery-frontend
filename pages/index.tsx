import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import BottomTab from '../components/common/BottomTab';
import BreadStore from '../components/breadstore/BreadStore';
import Search from '../components/search/Search';
import styled from 'styled-components';
import Home from '../components/home/home';

const HomePage: NextPage = () => {
  const [tab, setTab] = useState<number>(1);

  const renderTab = () => {
    switch (tab) {
      case 1:
        return <Home />;
      case 2:
        return <Search />;
      case 3:
        return <BreadStore />;

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
      {/* <ContentContainer></ContentContainer> */}
      {renderTab()}
      <BottomTab setTab={setTab} />
    </>
  );
};

const ContentContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 60px;
`;

export default HomePage;
