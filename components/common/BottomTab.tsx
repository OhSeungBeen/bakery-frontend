import React from 'react';
import styled from 'styled-components';
import home from '../../assets/icon/home.png';
import Image from 'next/image';
import tab2 from '../../assets/icon/tab2.png';
import tab3 from '../../assets/icon/tab3.png';
import tab4 from '../../assets/icon/tab4.png';
import tab5 from '../../assets/icon/tab5.png';

interface Props {
  setTab: (value: number) => void;
}
const BottomTab = ({ setTab }: Props) => {
  return (
    <BottomWrapper>
      <Image src={home} alt="메뉴" onClick={() => setTab(1)} />
      <Image src={tab2} alt="메뉴" onClick={() => setTab(2)} />
      <Image src={tab3} alt="메뉴" />
      <Image src={tab4} alt="메뉴" />
      <Image src={tab5} alt="메뉴" />
    </BottomWrapper>
  );
};
const BottomWrapper = styled.div`
  max-width: 767px;
  width: 100%;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -4px 8px rgba(19, 13, 8, 0.05);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 999;
  background-color: #fff;
`;

export default BottomTab;
