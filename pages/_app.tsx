import type { AppProps } from 'next/app';
import { wrapper } from '../modules/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/global-styles';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
`;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <WrapperContainer>
        <GlobalStyle />

        <Component {...pageProps} />
      </WrapperContainer>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
