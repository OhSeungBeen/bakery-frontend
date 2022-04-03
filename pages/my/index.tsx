import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { COLORS, ICONS } from '@/styles/theme';
import Top from '@/components/my/Top';
import { Layout } from '@/components/common';

const myData = {
  nickName: '우리동네가짱이야',
  email: 'ourbakery@gamil.com',
  image: '',
};

// const myData = null;

const MyPage = () => {
  return (
    <>
      <Top title="마이페이지" />
      <Profile>
        <ProfileImage>
          <Image width={38} height={44} src={ICONS.mypageEmoji} />
          {myData ? (
            <Link href={'/my/profile'}>
              <AlterButton>
                <Image width={14} height={14} src={ICONS.mypageAlter} />
              </AlterButton>
            </Link>
          ) : null}
        </ProfileImage>
        {myData ? (
          <>
            <NickNameWrapper>
              <NickName>{myData.nickName}</NickName>
              <Sir>님</Sir>
            </NickNameWrapper>
            <Email>{myData.email}</Email>
          </>
        ) : (
          <>
            <LoginButton>로그인</LoginButton>
            <Email>로그인 후 이용해주세요</Email>
          </>
        )}
      </Profile>
      <IconMenu>
        <Link href={'/my/town'}>
          <IconMenuItem>
            <IconMenuImage>
              <Image width={22} height={24} src={ICONS.mypageLocation} />
            </IconMenuImage>
            <IconMenuTitle>동네관리</IconMenuTitle>
          </IconMenuItem>
        </Link>
        <Link href={'/my/review'}>
          <IconMenuItem>
            <IconMenuImage>
              <Image width={22} height={24} src={ICONS.mypageReview} />
            </IconMenuImage>
            <IconMenuTitle>리뷰관리</IconMenuTitle>
          </IconMenuItem>
        </Link>
        <IconMenuItem>
          <IconMenuImage>
            <Image width={22} height={24} src={ICONS.mypageNotice} />
          </IconMenuImage>
          <IconMenuTitle>알림센터</IconMenuTitle>
        </IconMenuItem>
      </IconMenu>
      <Menu>
        {/* <MenuItem>
          <MenuItemTitle>개인정보 설정/변경</MenuItemTitle>{' '}
          <Image src={ICONS.leftArrow} alt="이동"></Image>
        </MenuItem> */}
        <MenuItem>
          고객센터
          <Image src={ICONS.leftArrow} alt="이동"></Image>
        </MenuItem>
        <MenuItem>
          약관확인
          <Image src={ICONS.leftArrow} alt="이동"></Image>
        </MenuItem>
      </Menu>
    </>
  );
};

const Profile = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${COLORS.lightBrown[400]};
  border: 3px solid ${COLORS.deepBrown[0]};
  position: relative;
`;

const AlterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.deepBrown[0]};
  cursor: pointer;
`;

const NickNameWrapper = styled.div`
  display: flex;
  margin-top: 13px;
  font-size: 20px;
`;

const NickName = styled.div`
  color: ${COLORS.deepBrown[700]};
`;

const LoginButton = styled.button`
  margin-top: 13px;
  border: none;
  background-color: ${COLORS.white};
  text-decoration: underline;
  font-size: 20px;
  color: ${COLORS.deepBrown[700]};
  cursor: pointer;
`;

const Sir = styled.span`
  color: ${COLORS.deepBrown[200]};
  margin-left: 5px;
`;

const Email = styled.div`
  margin-top: 5px;
  color: ${COLORS.grayscale[600]};
  font-weight: 300;
  font-size: 16px;
`;

const IconMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 65px;
  li + li {
    margin-left: 49px;
  }
`;

const IconMenuItem = styled.li`
  cursor: pointer;
`;

const IconMenuImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  margin: auto;
  /* background-color: ${COLORS.lightBrown[100]}; */
`;

const IconMenuTitle = styled.div`
  margin-top: 5px;
  color: ${COLORS.deepBrown[0]};
  font-size: 16px;
`;

const Menu = styled.ul`
  margin-top: 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 80%;
  border-top: 1px solid ${COLORS.lightBrown[100]};
  color: ${COLORS.deepBrown[0]};
  cursor: pointer;
`;

const MenuItemTitle = styled.div`
  font-size: 16px;
`;

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout withNavigator>{page}</Layout>;
};

export default MyPage;
