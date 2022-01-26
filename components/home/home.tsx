import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import KakaoMap from './kakaoMap';
import TopTab from '../../components/common/TopTab';
import like from '../../assets/icon/like.png';
import liked from '../../assets/icon/liked.png';
import IconButton from '../common/IconButton';

const GlobalStyle = createGlobalStyle`
  body {
    [data-rsbs-overlay] {
      width: 767px;
      margin: 0 auto;
      bottom: 60px;

      @media (max-width: 767px) {
        width: 100%;
        left: 0;
      }
    }
    [data-rsbs-header]:before {
      background: #744F2F;
    }
    
  }
`;

const Container = styled.div`
  margin-top: 80px;
  max-width: 767px;
  width: 100%;
`;

const BottomSheetHeader = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  span:first-child {
    font-weight: 600;
    color: #744f2f;
  }
`;

const StoreListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #f9f3ed;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  div {
    width: 80px;
    height: 80px;
    background: #f9f3ed;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  color: #757575;

  div:nth-child(1) {
    font-weight: 600;
    font-size: 16px;
    color: #3a2817;
  }
  div:nth-child(2) span:nth-child(1) {
    font-size: 13px;
    font-weight: 700;
  }
  div:nth-child(2) span:nth-child(2) {
    font-size: 13px;
    font-weight: 500;
  }
  div:nth-child(3) {
    font-size: 14px;
    font-weight: 500;
  }
  div + div {
    margin: 10px 0;
  }
  span + span {
    border-left: 1px solid #757575;
    margin-left: 10px;
    padding-left: 10px;
  }
`;

const LikedContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 12px;
    color: #c2844e;
  }
`;

const LikedButton = styled.button<{ src: string }>`
  width: 27px;
  height: 24px;
  cursor: pointer;
  border-style: none;
  background: transparent;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-position: center;
`;

const Home = () => {
  const [address, setAddress] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const onChangeAddress = (address: string) => {
    setAddress(address);
  };

  const onDismiss = () => {
    setOpen(true);
  };

  const onToggleLike = () => {
    setActive((prev) => !prev);
  };

  const onSearch = (mapRef: any) => {
    console.log(mapRef.current.getBounds().getSouthWest());
    console.log(mapRef.current.getBounds().getNorthEast());
    setOpen(true);
  };

  return (
    <>
      <TopTab onChange={onChangeAddress} />
      <Container>
        <KakaoMap address={address ? address : undefined} onSearch={onSearch} />
        <GlobalStyle />
        <BottomSheet
          open={open}
          onDismiss={onDismiss}
          blocking={false}
          snapPoints={({ headerHeight, maxHeight }) => [
            headerHeight,
            maxHeight - 80 - 60,
          ]}
          header={
            <BottomSheetHeader>
              <span>0</span>
              <span>개의 동네 빵집을 찾았어요.</span>
            </BottomSheetHeader>
          }
        >
          <StoreListItem>
            <ImageContainer>
              <div></div>
            </ImageContainer>
            <ContentContainer>
              <div>우리 동네 빵집</div>
              <div>
                <span>영업중</span>
                <span>11:00 ~ 18:00</span>
              </div>
              <div>
                <span>300m</span>
                <span>크로와상, 타르트</span>
              </div>
            </ContentContainer>
            <LikedContainer>
              <IconButton
                width={like.width}
                height={like.height}
                defaultSrc={like.src}
                activeSrc={liked.src}
                active={active}
                onToggle={onToggleLike}
              />
              <span>0</span>
            </LikedContainer>
          </StoreListItem>
        </BottomSheet>
      </Container>
    </>
  );
};

export default Home;
