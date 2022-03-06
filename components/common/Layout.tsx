import React from 'react';
import { MainNavBar } from '.';

type Props = {
  withNavigator: boolean;
};
const Layout: React.FC<Props> = ({ withNavigator, children }) => {
  return (
    <>
      <main>{children}</main>
      {withNavigator && <MainNavBar />}
    </>
  );
};

export default Layout;
