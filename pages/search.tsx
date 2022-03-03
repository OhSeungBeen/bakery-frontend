import { Layout } from '@/components/common';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

const SearchPage: NextPage = () => {
  // const router = useRouter();
  // router.push("/details/3");
  return (
    <div>
      <h1>SearchPage</h1>
    </div>
  );
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout withNavigator={false}>{page}</Layout>;
};

export default SearchPage;
