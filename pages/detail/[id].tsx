import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import backspace from '../../assets/icons/ic-backspace.png';
import shareIcon from '../../assets/icon/share.png';
import likeIcon from '../../assets/icon/like.png';
import starIcon from '../../assets/icon/star.png';
import MenuList from '../../components/detail/menuList';
import Info from '../../components/detail/info/info';
import Review from '../../components/detail/review/review';

const menuData = [
  {
    idx: 1,
    name: '가게 정보',
  },
  {
    idx: 2,
    name: '리뷰',
  },
];

const StoreDetail = () => {
  const [menuClicked, setMenuClicked] = useState(1);

  const renderTab = () => {
    switch (menuClicked) {
      case 1:
        return <Info />;
      case 2:
        return <Review />;

      // some other cases

      default:
        return <></>;
    }
  };
  return (
    <Container>
      <TabPicture>
        <IconArea>
          <BackButtn>
            <Image src={backspace} alt="뒤로가기" />
          </BackButtn>
          <IconPlus>
            <Image src={shareIcon} alt="공유하기" />
            <Image src={likeIcon} alt="좋아요" />
          </IconPlus>
        </IconArea>

        <PtitleContainer>
          <TitleArea>
            우리 동네 빵집
            <PtitleImgArea>
              <div>
                <Image alt="별점" src={starIcon} objectFit="fill" />
              </div>
              <StarValue>4.5</StarValue>
            </PtitleImgArea>
          </TitleArea>
          <OpenCloseTime>영업중 | 11:00 ~ 18:00</OpenCloseTime>
        </PtitleContainer>
      </TabPicture>
      <Menu>
        {/* {menuClicked === 1 ? (
          <MenuList title="가게 정보" active={true} />
        ) : (
          <MenuList title="가게 정보" active={false} />
        )} */}
        {menuData.map((menu, index: number) => (
          <>
            {index + 1 === menuClicked ? (
              <MenuList
                title={menu.name}
                active={true}
                menuClicked={setMenuClicked}
                index={menu.idx}
              />
            ) : (
              <MenuList
                title={menu.name}
                active={false}
                menuClicked={setMenuClicked}
                index={menu.idx}
              />
            )}
          </>
        ))}
      </Menu>
      {renderTab()}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-content: center;
  max-width: 767px;
  width: 100%;
  height: 100%;
`;
const TabPicture = styled.div`
  width: 375px;
  height: 400px;
  background: #f9f3ed;
  position: relative;
`;
const PtitleContainer = styled.div`
  position: absolute;
  width: 208px;
  height: 33px;
  left: 23px;
  top: 315px;
`;
const TitleArea = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  display: flex;
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
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;

  //   & > div:first-child {
  //     padding-right: 128px;
  //   }
`;

const PtitleImgArea = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;
const StarValue = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding-left: 4.86px;
`;
const OpenCloseTime = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #757575;
  opacity: 0.99;
  margin-top: 5px;
`;
export default StoreDetail;
