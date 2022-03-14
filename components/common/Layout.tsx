import React from 'react';
import { MainNavBar } from '.';

interface LayoutProps {
  withNavigator: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ withNavigator, children }) => {
  return (
    <>
      <main>{children}</main>
      {withNavigator && <MainNavBar />}
    </>
  );
};
