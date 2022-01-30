import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import backspace from '../../assets/icon/backspace.png';
import shareIcon from '../../assets/icon/share.png';
import likeIcon from '../../assets/icon/like.png';
const StoreDetail = () => {
  return (
    <Container>
      <TabPicture>
        <IconArea>
          <BackButtn>
            <Image src={backspace} alt="뒤로가기" />
          </BackButtn>
          <IconPlus>
            <Image src={shareIcon} alt="공유하기" />
            <Image src={likeIcon} alt="공유하기" />
          </IconPlus>
        </IconArea>
        <Ptitle>우리 동네 빵집</Ptitle>
      </TabPicture>
    </Container>
  );
};

const Container = styled.div`
  max-width: 767px;
  width: 100%;
  height: 100%;
  background-color: red;
`;
const TabPicture = styled.div`
  width: 375px;
  height: 400px;
  background: #f9f3ed;
`;
const Ptitle = styled.div`
  position: absolute;
  width: 138px;
  height: 33px;
  left: 23px;
  top: 315px;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
`;
const IconArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-top: 32.5px;
`;

const BackButtn = styled.div``;
const IconPlus = styled.div`
  padding-right: 32px;
  & img:nth-child(1) {
    padding-right: 50px;
  }
`;

export default StoreDetail;
