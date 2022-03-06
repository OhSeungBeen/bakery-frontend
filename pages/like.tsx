import { Layout } from '@/components/common';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const LikePage: NextPage = () => {
  return (
    <div>
      <h1>LikePage</h1>
    </div>
  );
};

LikePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout withNavigator={false}>{page}</Layout>;
};

export default LikePage;
