import Image from 'next/image';
import { COLORS, ICONS } from '@/styles/theme';
import styled from 'styled-components';

interface DetailHeaderProps {
  storeName: string;
  grade: number;
  state: 'open' | 'close';
  businessHours: string;
  onGoBack: () => void;
  onShare: () => void;
  onLike: () => void;
}

export const DetailHeader: React.FC<DetailHeaderProps> = ({
  storeName,
  grade,
  state,
  businessHours,
  onGoBack,
  onShare,
  onLike,
}) => {
  const businessState = state === 'open' ? '영업중' : '영업종료';

  return (
    <Wrapper>
      <Top>
        <Image src={ICONS.back} alt="img-back" onClick={onGoBack} />

        <RightWrapper>
          <ShareImageWrapper>
            <Image src={ICONS.detailShare} alt="back" onClick={onShare} />
          </ShareImageWrapper>

          <Image src={ICONS.outlinedLike} alt="back" onClick={onLike} />
        </RightWrapper>
      </Top>

      <LogoWrapper>
        <Image src={ICONS.logo} alt="logo" />
      </LogoWrapper>

      <div>
        <RowWrapper>
          <StoreName>{storeName}</StoreName>
          <RowWrapper>
            <Image src={ICONS.reviewStar} />
            <Grade>{grade}</Grade>
          </RowWrapper>
        </RowWrapper>
        <BusinessHours>{`${businessState} | ${businessHours}`}</BusinessHours>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background: ${COLORS.lightBrown[400]};
  display: flex;
  flex-direction: column;
  padding: 20px 30px 20px 20px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 0px 64px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 5px 0;
`;

const StoreName = styled.text`
  font-family: 'Noto Sans';
  font-size: 24px;
  font-weight: 700;
  color: ${COLORS.deepBrown[700]};
  margin: 0 10px 5px 0;
`;

const Grade = styled.text`
  font-family: 'Noto Sans';
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.deepBrown[700]};
  margin: 0 0 0 5px;
`;

const BusinessHours = styled.text`
  font-family: 'Noto Sans';
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.grayscale[600]};
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ShareImageWrapper = styled.div`
  margin: 0 20px 0 0;
`;
