import { DefaultTheme } from 'styled-components';

const size = {
  mobile: '600px',
  tablet: '900px',
  laptop: '1200px',
  desktop: '1800px',
};

export const theme: DefaultTheme = {
  mainColor: '#0a4297',
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
const margins = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

const paddings = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: '1.4rem',
    base: '1.6rem',
    lg: '2rem',
    xl: '2.5rem',
    title: '6rem',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const colors = {
  red: '#ff4d4d',
  yellow: '#ffff4d',
  blue: '#0099ff',
};

// const size = {
//   mobile: "425px",
//   tablet: "768px",
//   desktop: "1440px",
// };

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

//테마에 따라 다른 값을 갖는 색상 값입니다
const lightThemeColors = {
  ...colors,
  primary: '#333',
  secondary: '#fff',
  tertiary: '#808080',
};

const darkThemeColors = {
  ...colors,
  primary: '#fff',
  secondary: '#333',
  tertiary: '#d4d0c4',
};

// 테마와 관련없이 공통으로 사용되는 변수들입니다
const defalutTheme = {
  margins,
  paddings,
  fonts,
  device,
};

// 각 테마는 공통 변수와 함께, 각기 다른 색상 값들을 갖습니다.
export const darkTheme = {
  ...defalutTheme,
  colors: darkThemeColors,
};

export const lightTheme = {
  ...defalutTheme,
  colors: lightThemeColors,
};

export const COLORS = {
  black: '#130d08',
  yellow: '#FFD43B',
  green: '#00D749',
  red: '#FF2E00',
  white: '#ffffff',
  lightBrown: {
    100: '#f9f3ed',
    200: '#f3e6dc',
    300: '#eddaca',
    400: '#e7ceb8',
    500: '#e1c2a7',
    600: '#dab595',
    700: '#d4a983',
    800: '#ce9d71',
    900: '#c89060',
    1000: '#C2844E',
  },
  deepBrown: {
    0: '#C2844E',
    100: '#af7746',
    200: '#9b6a3e',
    300: '#885c37',
    400: '#744f2f',
    500: '#614227',
    600: '#4e351f',
    700: '#3a2817',
    800: '#271a10',
    900: '#130d08',
    1000: '#000000',
  },
  grayscale: {
    100: '#f5f5f5',
    200: '#dbdbdb',
    300: '#c2c2c2',
    400: '#a8a8a8',
    500: '#8f8f8f',
    600: '#757575',
    700: '#5c5c5c',
    800: '#424242',
    900: '#292929',
  },
};

export const ICONS = {
  add: require('@/assets/icons/ic-add.png'),
  bread1: require('@/assets/icons/ic-bread1.png'),
  bread2: require('@/assets/icons/ic-bread2.png'),
  bread3: require('@/assets/icons/ic-bread3.png'),
  bread4: require('@/assets/icons/ic-bread4.png'),
  bread5: require('@/assets/icons/ic-bread5.png'),
  bread6: require('@/assets/icons/ic-bread6.png'),
  checkLarge: require('@/assets/icons/ic-check-large.png'),
  check: require('@/assets/icons/ic-check.png'),
  leftArrow: require('@/assets/icons/ic-left-arrow.png'),
  reviewStar: require('@/assets/icons/ic-review-star.png'),
  reviewStarHalf: require('@/assets/icons/ic-review-star-half.png'),
  share: require('@/assets/icons/ic-share.png'),
  myLocation: require('@/assets/icons/ic-my-location.png'),
  store1: require('@/assets/icons/ic-store1.png'),
  store2: require('@/assets/icons/ic-store2.png'),
  backspace: require('@/assets/icons/ic-backspace.png'),
  address: require('@/assets/icons/ic-address.png'),
  addressActive: require('@/assets/icons/ic-address-active.png'),
  home: require('@/assets/icons/ic-home.png'),
  homeActive: require('@/assets/icons/ic-home-active.png'),
  search: require('@/assets/icons/ic-search.png'),
  searchActive: require('@/assets/icons/ic-search-active.png'),
  content: require('@/assets/icons/ic-content.png'),
  contentActive: require('@/assets/icons/ic-content-active.png'),
  like: require('@/assets/icons/ic-like.png'),
  likeActive: require('@/assets/icons/ic-like-active.png'),
  my: require('@/assets/icons/ic-my.png'),
  myActive: require('@/assets/icons/ic-my-active.png'),
};
