import React from 'react';
import styled from 'styled-components';
import { MainNavBar } from '.';

interface LayoutProps {
  withNavigator: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ withNavigator, children }) => {
  return (
    <>
      <Container>
        <SubContent />
        <MainContent>
          <main>{children}</main>
          {withNavigator && <MainNavBar />}
        </MainContent>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.device.laptop} {
    justify-content: flex-start;
  }
  min-height: 100vh;
`;
const SubContent = styled.div`
  width: 28rem;
  border: 1px solid gray;
  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`;
const MainContent = styled.div`
  position: relative;
  width: 28rem;
  @media ${({ theme }) => theme.device.laptop} {
    margin: 0 auto;
  }
`;

export default Layout;
