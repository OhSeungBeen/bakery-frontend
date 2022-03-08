import React, { ReactNode } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { COLORS, ICONS } from '@/styles/theme';

interface Props {
  title: string;
  button?: ReactNode;
}

const Top: React.FC<Props> = ({ button, title }) => {
  return (
    <Container>
      <BackspaceImageWrapper>
        <Image src={ICONS.backspace} alt="뒤로가기" />
      </BackspaceImageWrapper>
      <Title>{title}</Title>
      <Button>{button && button}</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 24px;
`;

const BackspaceImageWrapper = styled.div`
  flex: 1;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${COLORS.deepBrown[700]};
`;

const Button = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;

export default Top;
