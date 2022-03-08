import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import styled from 'styled-components';
import { COLORS, ICONS } from '@/styles/theme';
import Top from '@/components/my/Top';

const townData = [
  { name: '집 동네' },
  { name: '회사 동네' },
  { name: '데이트 동네' },
];

const TownPage: NextPage = () => {
  return (
    <Container>
      <Top title="자주가는 동네 설정" button={<Button>편집</Button>} />
      <TownList>
        {townData.map((town, index) => (
          <TownListItem active={index === 0} key={index}>
            <ImageWrapper active={index === 0}>
              <Image src={index === 0 ? ICONS.addressActive : ICONS.address} />
            </ImageWrapper>
            <Title active={index === 0}>{town.name}</Title>
            <ActiveImageWrapper>
              {index === 0 && <Image src={ICONS.reviewStarHalf} />}
            </ActiveImageWrapper>
          </TownListItem>
        ))}
        <TownListItem add={true}>
          <ImageWrapper add={true}>
            <Image src={ICONS.add} alt="추가" />
          </ImageWrapper>
          <Title add={true}>자주가는 동네 추가</Title>
        </TownListItem>
      </TownList>
      <Info>
        <p>자주가는 동네는</p>
        <p>최대 3개까지 등록 가능합니다.</p>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  max-width: 767px;
  width: 100%;
`;

const Button = styled.button`
  color: ${COLORS.grayscale[600]};
  background-color: ${COLORS.white};
  font-size: 18px;
  font-weight: 300;
  border: none;
  cursor: pointer;
  :hover {
    color: ${COLORS.deepBrown[0]};
  }
`;

const TownList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const TownListItem = styled.li<{ add?: boolean; active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 21px 0;
  width: 80%;
  cursor: pointer;
  border-bottom: 1px solid ${COLORS.lightBrown[100]};
  color: ${(props) => {
    if (props.add) {
      return COLORS.grayscale[300];
    } else if (props.active) {
      return COLORS.deepBrown[600];
    } else {
      return COLORS.deepBrown[0];
    }
  }};
  :hover {
    color: ${(props) => props.add && COLORS.deepBrown[0]};
  }
  span {
    margin-left: 10px;
  }
`;

const ImageWrapper = styled.div<{ add?: boolean; active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.add) {
      return COLORS.white;
    } else if (props.active) {
      return COLORS.deepBrown[700];
    } else {
      return COLORS.lightBrown[100];
    }
  }};
`;

const ActiveImageWrapper = styled.div`
  margin-left: 10px;
`;

const Title = styled.div<{ add?: boolean; active?: boolean }>`
  margin-left: 30px;
  font-weight: ${(props) => (props.active ? 600 : 400)};
`;

const Info = styled.div`
  margin-top: 100px;
  color: ${COLORS.grayscale[300]};
  p {
    text-align: center;
  }
  p + p {
    margin-top: 8px;
  }
`;

export default TownPage;
