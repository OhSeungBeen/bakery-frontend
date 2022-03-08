import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { COLORS, ICONS } from '@/styles/theme';

const writeableDatas = [
  { storeName: '우리 동네 빵집', visitInfo: '2021.12.12 1번째 방문' },
  { storeName: '우리 동네 빵집', visitInfo: '2021.12.12 1번째 방문' },
  { storeName: '우리 동네 빵집', visitInfo: '2021.12.12 1번째 방문' },
];

const WriteableReview: React.FC = () => {
  return (
    <ReviewList>
      {writeableDatas.map((writeableData) => (
        <ReviewListItem>
          <ReviewInfo>
            <ImageWrapper></ImageWrapper>
            <StoreInfo>
              <StoreName>{writeableData.storeName}</StoreName>
              <VisitInfo>{writeableData.visitInfo}</VisitInfo>
            </StoreInfo>
          </ReviewInfo>
          <WriteButton>작성하기</WriteButton>
        </ReviewListItem>
      ))}
    </ReviewList>
  );
};

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  > div + div {
    margin-top: 10px;
  }
`;

const ReviewListItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
  background-color: ${COLORS.lightBrown[100]};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ReviewInfo = styled.div`
  display: flex;
  justify-items: center;
`;

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background-color: ${COLORS.lightBrown[400]};
`;

const StoreInfo = styled.div`
  margin-left: 19px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StoreName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${COLORS.deepBrown[900]};
`;
const VisitInfo = styled.div`
  margin-top: 4px;
  font-size: 13px;
  color: ${COLORS.grayscale[600]};
`;

const WriteButton = styled.button`
  margin-top: 20px;
  align-self: flex-end;
  border: none;
  background-color: transparent;
  color: ${COLORS.deepBrown[700]};
  cursor: pointer;
`;

export default WriteableReview;
