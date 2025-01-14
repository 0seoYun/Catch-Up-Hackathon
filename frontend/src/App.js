import { createGlobalStyle } from "styled-components";
import Routers from './Routes';

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/earlyaccess/notosanskr.css");
@import url('https://rsms.me/inter/inter.css');
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap');
 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

// 추가1. 모든 태그에 border-box 적용 (테두리와 안쪽 여백의 크기도 요소의 크기로 고려)
* {
    box-sizing: border-box;
}

// 추가2. 링크에 모든 밑줄 삭제
a{
    text-decoration: none;
    color:inherit;  // 색을 부모로부터 상속 받음
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Routers/>
    </>
  );
}

export default App;