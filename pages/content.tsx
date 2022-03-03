import { Layout } from '@/components/common';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const ContentPage: NextPage = () => {
  return (
    <div>
      <h1>ContentPage</h1>
    </div>
  );
};

ContentPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout withNavigator={false}>{page}</Layout>;
};

export default ContentPage;
