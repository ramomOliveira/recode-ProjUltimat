import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #212121;
    --orange: #f49e0b;
    --light-orange: rgb(252, 185, 69);
    --red: #ff0000;
    
   
  }
  
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    line-height: 1;
  }

  blockquote {
    &:before, &:after {
      content: '';
      content: none; 
    } 
  }

  q {
    &:before, &:after {
      content: '';
      content: none; 
    } 
  }
  
  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  blockquote, q {
    quotes: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0; 
  }

  button {
    border: none;
    cursor: pointer;
  }

  input,
  textarea,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"],
  button[disabled],
  input[type="radio"], 
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button, 
  input[type="search"], 
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    border:none;
      background-image:none;
      background-color:transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
  }

html {
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  .margins {
    padding-left: 17rem;
    padding-right: 17rem;
  }

  @media (max-width: 1680px) {
    .margins {
      padding-left: 10rem;
      padding-right: 10rem;
    }

  }
 
  @media (max-width: 1366px) {
    .margins {
      padding-left: 6rem;
     padding-right: 6rem;
    }

  }

  @media (max-width: 1199.98px) {
    .margins {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  @media (max-width: 767.98px) {
    .margins {
      padding-left: 1.2rem;
      padding-right: 1.2rem;
    }   
  }
`;
