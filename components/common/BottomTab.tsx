import React from 'react';
import styled from 'styled-components';
import home from '../../assets/icon/home.png';
import Image from 'next/image';

const BottomTab = () => {
  return (
    <BottomWrapper>
      <Image src={home} alt="last supper" />
      <Image src={home} alt="last supper" />
      <Image src={home} alt="last supper" />
      <Image src={home} alt="last supper" />
      <Image src={home} alt="last supper" />
    </BottomWrapper>
  );
};
const BottomWrapper = styled.div`
  max-width: 767px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: 0px -4px 8px rgba(19, 13, 8, 0.05);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 999;
`;
const BottomEach = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default BottomTab;
