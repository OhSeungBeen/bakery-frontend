import React, { memo, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  active: number;
  menuClicked: Dispatch<SetStateAction<number>>;
  index: number;
}
const menuList = ({ title, active, menuClicked, index }: Props) => {
  const menuClick = (index: number) => {
    menuClicked(index);
  };
  return (
    <>
      <TextContainer onClick={() => menuClick(index)} active={active}>
        <Text active={active}>{title}</Text>
        <Line active={active}></Line>
      </TextContainer>
    </>
  );
};
const TextContainer = styled.div`
  & > div {
    display: flex;
    justify-content: center;
  }
  cursor: pointer;
`;

const Text = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.04em;
  color: ${(props) => (props.active ? '#3A2817' : '#c2844e')};
`;
const Line = styled.div`
  display: flex;
  justify-content: center;
  width: 167.5px;
  height: 0px;
  left: 20px;
  top: 479px;
  border: ${(props) =>
    props.active ? '2px solid #3A2817' : '1px solid #c2844e'};\
  margin-top:${(props) => (props.active ? '8px' : '9px')};

`;
export default memo(menuList);
