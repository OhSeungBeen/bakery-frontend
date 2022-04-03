import React from 'react';
import styled from 'styled-components';
import { MainNavBar } from '.';

type Props = {
  withNavigator: boolean;
};
const Layout: React.FC<Props> = ({ withNavigator, children }) => {
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
