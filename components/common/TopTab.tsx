import React from 'react';
import styled from 'styled-components';
const TopTab = () => {
  return <TopWrapper></TopWrapper>;
};
const TopWrapper = styled.div`
  max-width: 767px;
  width: 100%;
  position: absolute;
  background-color: #9b6a3e;
  top: 0;
  left: 0;
  height: 60px;
  display: flex;
  align-items: center;
  z-index: 999;
  box-shadow: 0px 4px 4px rgba(19, 13, 8, 0.05);
`;
export default TopTab;
