import React, { memo, Dispatch, SetStateActio } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  active: number;
  menuClicked: (index: number) => void;
  index: number;
}
const menuList = ({ title, active, menuClicked, index }: Props) => {
  const menuClick = (index: number) => {
    menuClicked(index);
  };
  return (
    <>
      <TextContainer onClick={() => menuClick(index)} active={active}>
        <Text>{title}</Text>
        <Line></Line>
      </TextContainer>
    </>
  );
};
const TextContainer = styled.div`
  ${({ active }) =>
    active &&
    `
  background: blue;
  `}
  & > div {
    display: flex;
    justify-content: center;
  }
`;

const Text = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.04em;
  color: #c2844e;
`;
const Line = styled.div`
  display: flex;
  justify-content: center;
  width: 167.5px;
  height: 0px;
  left: 20px;
  top: 479px;
  border: 1px solid #c2844e;
  margin-top: 9px;
`;
export default memo(menuList);
