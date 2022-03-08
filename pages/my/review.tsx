import React, { useState } from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import styled, { css } from 'styled-components';
import { COLORS, ICONS } from '@/styles/theme';
import Top from '@/components/my/Top';
import WriteableReview from '@/components/my/WriteableReview';
import WrittenReview from '@/components/my/WrittenReview';

const reviewData = {
  nickName: '우리동네가짱이야',
};

const ReviewPage: NextPage = () => {
  const [activeTap, setActiveTap] = useState(0);

  const taps = [
    { title: '작성가능 리뷰', content: <WriteableReview /> },
    { title: '작성한 리뷰', content: <WrittenReview /> },
  ];

  const onClickTap = (index: number) => {
    setActiveTap(index);
  };

  return (
    <Container>
      <Top title="리뷰 관리" />
      <Profile>
        <ProfileIamgeWrapper></ProfileIamgeWrapper>
        <NickName>{reviewData.nickName}</NickName>
        <Sir>님</Sir>
      </Profile>
      <TapWrapper>
        <Tap>
          {taps.map((tap, index) => (
            <TapItem
              key={index}
              onClick={() => onClickTap(index)}
              activeTap={activeTap === index}
            >
              {tap.title}
            </TapItem>
          ))}
        </Tap>
        <Content>{taps[activeTap].content}</Content>
      </TapWrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 767px;
  width: 100%;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 32px;
`;

const ProfileIamgeWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${COLORS.lightBrown[400]};
  border-radius: 50%;
`;

const NickName = styled.div`
  margin-left: 10px;
  color: ${COLORS.deepBrown[700]};
  font-size: 18px;
`;

const Sir = styled.div`
  margin-left: 4px;
  color: ${COLORS.deepBrown[0]};
`;

const TapWrapper = styled.div`
  padding: 0 24px;
  margin-top: 28px;
`;

const Tap = styled.ul`
  display: flex;
`;

const TapItem = styled.li<{ activeTap: boolean }>`
  width: 50%;
  padding-bottom: 11px;
  text-align: center;
  cursor: pointer;
  color: ${COLORS.deepBrown[0]};
  border-bottom: solid 1px ${COLORS.deepBrown[0]};
  ${(props) =>
    props.activeTap &&
    css`
      font-weight: 700;
      color: ${COLORS.deepBrown[700]};
      border-bottom: solid 2px ${COLORS.deepBrown[700]};
    `}
`;

const Content = styled.div``;

export default ReviewPage;
