import React from 'react';
import { COLORS } from '@/styles/theme';
import styled from 'styled-components';
import { ComponentState } from '../types';

interface CheckBoxProps {
  disabled?: boolean;
  checked: boolean;
  onClick: () => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  disabled,
  checked,
  onClick,
}) => {
  const state: ComponentState = disabled
    ? 'disabled'
    : checked
    ? 'active'
    : 'normal';

  const handleClick = () => {
    if (disabled !== true) {
      onClick();
    }
  };

  return (
    <Wrapper onClick={handleClick} state={state}>
      {!disabled && (
        <svg viewBox="0 0 24 24">
          <polyline points="5,11 10,16 19,6" />
        </svg>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ state: ComponentState }>`
  width: 28px;
  height: 28px;
  box-sizing: border-box;
  border-radius: 4px;
  background: ${(props) =>
    props.state === 'disabled'
      ? COLORS.lightBrown[100]
      : props.state === 'normal'
      ? COLORS.white
      : COLORS.deepBrown[0]};
  border: ${(props) =>
    props.state === 'normal' && `2px solid ${COLORS.lightBrown[500]}`};

  svg {
    fill: none;
    stroke: ${COLORS.white};
    stroke-width: 3px;
  }
`;
