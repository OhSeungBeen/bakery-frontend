import type { NextPage } from 'next';
import { ReactElement } from 'react';
import styled from 'styled-components';
import Home from '../components/home/home';
import { Layout } from '@/components/common';

const HomePage = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout withNavigator>{page}</Layout>;
};

export default HomePage;
