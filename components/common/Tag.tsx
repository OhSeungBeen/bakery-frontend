import React from 'react';
import { COLORS } from '@/styles/theme';
import styled from 'styled-components';

type Props = {
  content: string;
  type?: 'light' | 'deep';
  selected: boolean;
  onClick: () => void;
};
const Tag: React.FC<Props> = ({ content, type, selected, onClick }) => {
  return (
    <Wrapper type={type} selected={selected} onClick={onClick}>
      {content}
    </Wrapper>
  );
};

const Wrapper = styled.div<Pick<Props, 'type' | 'selected'>>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 15px;
  font-size: 12px;
  font-family: 'Noto Sans';
  font-weight: 'normal';
  border-radius: 8px;
  color: ${(props) =>
    props.selected
      ? COLORS.yellow
      : props.type === 'deep'
      ? COLORS.lightBrown[100]
      : COLORS.grayscale[300]};
  background: ${(props) =>
    props.selected
      ? COLORS.deepBrown[700]
      : props.type === 'deep'
      ? COLORS.deepBrown[200]
      : COLORS.lightBrown[200]};
`;

export default Tag;
