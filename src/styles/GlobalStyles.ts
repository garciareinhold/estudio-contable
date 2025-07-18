import { createGlobalStyle } from 'styled-components';
import { theme } from '../config/theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }
`; 