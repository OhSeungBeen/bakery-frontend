import { NextPage } from 'next';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DetailHeader } from '@/components/detail';

const DetailPage: NextPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Wrapper>
      <DetailHeader
        onGoBack={handleGoBack}
        storeName={'우리동네 빵집'}
        grade={4.5}
        state={'open'}
        businessHours={'11:00 ~ 22:00'}
        onShare={function (): void {
          throw new Error('Function not implemented.');
        }}
        onLike={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
`;

export default DetailPage;
