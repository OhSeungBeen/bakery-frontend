import { COLORS } from '@/styles/theme';
import React from 'react';
import styled from 'styled-components';

interface BadgeProps {
  content: string;
}

export const Badge: React.FC<BadgeProps> = ({ content }) => {
  return <Wrapper>{content}</Wrapper>;
};

const Wrapper = styled.div`
  background: ${COLORS.grayscale[100]};
  padding: 8px 18px;
  border-radius: 20px;
  margin: 10px 5px;

  text {
    font-family: 'Noto Sans';
    font-weight: 500;
    font-size: 12px;
    color: ${COLORS.deepBrown[700]};
  }
`;
