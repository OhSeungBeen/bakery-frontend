import { Layout } from '@/components/common';
import React, { ReactElement } from 'react';

const MyPage: React.FC = () => {
  return (
    <div>
      <h1>MyPage</h1>
    </div>
  );
};

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout withNavigator>{page}</Layout>;
};

export default MyPage;
