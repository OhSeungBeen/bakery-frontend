import type { AppProps } from 'next/app';
import { wrapper } from '../modules/store';
import {ThemeProvider} from 'styled-components';
import {theme} from '../src/styles/theme';
import {GlobalStyle} from '../src/styles/global-styles';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />;
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp);
