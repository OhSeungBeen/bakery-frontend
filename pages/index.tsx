import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import userSlice from '../modules/user';

const NameWrapper = styled.div`
  font-size: 2rem;
  color: #452bdb;
`;

const ButtonWrapper = styled.button`
  font-size: 1rem;
  background-color: white;
  border: 1px solid;
`;

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.user.name);

  const onClick = () => {
    dispatch(userSlice.actions.changeName({ name: 'Bakery User' }));
  };

  return (
    <>
      <Head>
        <title>Bakery | Home</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NameWrapper>{name}</NameWrapper>
      <ButtonWrapper onClick={(e) => onClick()}>변경</ButtonWrapper>
    </>
  );
};

export default Home;
