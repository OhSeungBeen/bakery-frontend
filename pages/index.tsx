import type { NextPage } from 'next';
import { ReactElement } from 'react';
import styled from 'styled-components';
import Home from '../components/home/home';
import Layout from '@/components/common/Layout';

const HomePage: NextPage = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout withNavigator>{page}</Layout>;
};

const ContentContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 60px;
`;

export default HomePage;
