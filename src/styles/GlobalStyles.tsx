import { Global, css } from '@emotion/react';

const globalStyles = css`
  @import url(https://fonts.googleapis.com/css?family=Space+Grotesk:300,regular,500,600,700);
  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    background-color: white;
    font-family: 'Space Grotesk', 'Helvetica Neue', Helvetica, sans-serif;
    color: black;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 40px;
    margin: 0px 0px 30px 0px;
  }

  h2 {
    font-size: 30px;
    margin: 0px 0px 20px 0px;
  }

  h3 {
    font-size: 24px;
    margin: 0px 0px 20px 0px;
  }

  h4 {
    font-size: 20px;
    margin: 0px 0px 15px 0px;
  }

  h5 {
    font-size: 16px;
    margin: 0px 0px 10px 0px;
  }

  p {
    line-height: 20px;
    margin: 20px 0;
  }
`;

function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;
