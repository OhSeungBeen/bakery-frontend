import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import backspace from '../../assets/icon/backspace.png';
import shareIcon from '../../assets/icon/share.png';
import likeIcon from '../../assets/icon/like.png';
import MenuList from '../../components/detail/menuList';

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
  &:nth-child(1) {
    padding-right: 50px;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;

  //   & > div:first-child {
  //     padding-right: 128px;
  //   }
`;

export default StoreDetail;
