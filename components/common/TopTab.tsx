import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const TopTab = () => {
  return <TopWrapper></TopWrapper>;
};
const TopWrapper = styled.div`
  max-width: 767px;
  width: 100%;
  position: fixed;
  background-color: #9b6a3e;
  top: 0;
  height: 80px;
  display: flex;
  align-items: center;
  z-index: 999;
  box-shadow: 0px 4px 4px rgba(19, 13, 8, 0.05);
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    left: 0;
  }
`;
export default TopTab;
