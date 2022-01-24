import React from 'react';
import styled from 'styled-components';
import home from '../../assets/icon/home.png';
import Image from 'next/image';

const BottomTab = () => {
  return (
    <BottomWrapper>
      <BottomEach>
        <Image src={home} alt="last supper" />
      </BottomEach>
    </BottomWrapper>
  );
};
const BottomWrapper = styled.div`
  width: 376px;
  position: absolute;
  bottom: 0;
  box-shadow: 0px -4px 8px rgba(19, 13, 8, 0.05);
  height: 60px;
  display: flex;
  align-items: center;
  z-index: 999;
`;
const BottomEach = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default BottomTab;
