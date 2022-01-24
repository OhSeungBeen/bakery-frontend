import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}
body {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans KR", "Noto Sans CJK KR";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  word-break: keep-all;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}
input,
button,
textarea {
  font-family: inherit;
}
html,
body,
#root {
  height: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul,
li {
  list-style-type: none;
  padding-left: 0px;
}
a {
  text-decoration: none;
}
main {
  padding-top: 70px;
}
`;
