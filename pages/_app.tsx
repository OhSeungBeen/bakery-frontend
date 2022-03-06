import type { AppProps } from 'next/app';
import { wrapper } from '../modules/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/global-styles';
import styled from 'styled-components';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <WrapperContainer>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </WrapperContainer>
    </ThemeProvider>
  );
}
const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: auto;
  width: 100%;
`;
export default wrapper.withRedux(MyApp);
