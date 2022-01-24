import type { AppProps } from 'next/app';
import { wrapper } from '../modules/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/global-styles';
import styled from 'styled-components';

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
const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: auto;
  width: 100%;
`;
export default wrapper.withRedux(MyApp);
