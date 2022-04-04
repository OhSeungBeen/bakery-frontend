import React from 'react';
import { COLORS } from '@/styles/theme';
import styled from 'styled-components';

export const Button: React.FC = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.div`
  width: 182px;
  height: 48px;
  border-radius: 30px;
  background: ${COLORS.deepBrown[700]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background: ${COLORS.yellow};
    text {
      color: ${COLORS.deepBrown[700]};
    }
  }

  text {
    color: ${COLORS.yellow};
  }
`;
