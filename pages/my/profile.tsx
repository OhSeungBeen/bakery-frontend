import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Top from '@/components/my/Top';
import Image from 'next/image';
import { COLORS, ICONS } from '@/styles/theme';
import { Layout } from '@/components/common';

const ProfilePage = () => {
  return (
    <Container>
      <Top title="마이페이지" />
      <Profile>
        <ProfileImage>
          <Image width={38} height={44} src={ICONS.mypageEmoji} />
          <AlterButton>
            <Image width={14} height={14} src={ICONS.mypageAlter} />
          </AlterButton>
        </ProfileImage>
        <ProfileNameContainer>
          <ProifileNameInput placeholder="우리동네빵집"></ProifileNameInput>
          <ProfileNameCancelButton>취소</ProfileNameCancelButton>
        </ProfileNameContainer>
        <Desc>프로필 사진과 닉넥임을 입력해주세요.</Desc>
        <SaveButton>저장</SaveButton>
      </Profile>
    </Container>
  );
};

const Container = styled.div`
  max-width: 767px;
  width: 100%;
`;

const Profile = styled.div`
  margin-top: 50px;
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
  margin-bottom: 33px;
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

const ProfileNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 2px solid #f9f3ed;
  width: 320px;
  padding-bottom: 2px;
`;

const ProifileNameInput = styled.input`
  flex-grow: 1;
  border: none;
  :focus-visible {
    outline: none;
  }
`;
const ProfileNameCancelButton = styled.button`
  width: 43px;
  height: 20px;
  background-color: #e5e5e5;
  color: #c2844e;
  border: none;
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
`;

const Desc = styled.div`
  align-self: center;
  margin-bottom: 40px;
  color: ${COLORS.grayscale[300]};
`;

const SaveButton = styled.button`
  background-color: ${COLORS.deepBrown[700]};
  color: ${COLORS.yellow};
  width: 180px;
  height: 48px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout withNavigator>{page}</Layout>;
};

export default ProfilePage;
