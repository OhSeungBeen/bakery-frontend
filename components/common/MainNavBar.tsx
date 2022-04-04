import React from 'react';
import { useRouter } from 'next/router';
import { Link } from '.';
import styled from 'styled-components';
import { ICONS } from '@/styles/theme';

export const MainNavBar: React.FC = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Link
        path={'/'}
        icons={{
          normal: ICONS.home,
          acitve: ICONS.homeActive,
        }}
        activePath={router.pathname}
      />
      <Link
        path={'/search'}
        icons={{
          normal: ICONS.search,
          acitve: ICONS.searchActive,
        }}
        activePath={router.pathname}
      />
      <Link
        path={'/content'}
        icons={{
          normal: ICONS.content,
          acitve: ICONS.contentActive,
        }}
        activePath={router.pathname}
      />
      <Link
        path={'/like'}
        icons={{
          normal: ICONS.like,
          acitve: ICONS.likeActive,
        }}
        activePath={router.pathname}
      />
      <Link
        path={'/my'}
        icons={{
          normal: ICONS.my,
          acitve: ICONS.myActive,
        }}
        activePath={router.pathname}
      />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  box-shadow: 0px -4px 8px rgba(19, 13, 8, 0.05);
`;
