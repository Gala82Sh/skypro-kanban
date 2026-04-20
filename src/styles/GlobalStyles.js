import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: ${colors.textPrimary};
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  .wrapper {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${colors.bgWrapper};
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  @media screen and (max-width: 495px) {
    .container {
      width: 100%;
      padding: 0 16px;
    }
  }

  
  .pop-new-card,
  .pop-browse,
  .pop-exit {
    display: none;
  }

 
  .pop-new-card:target,
  .pop-browse:target,
  .pop-exit:target {
    display: block;
  }
`;