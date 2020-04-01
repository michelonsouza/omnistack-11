import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import metrics from './metrics';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
    transition: 200ms ease !important;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body, input, button, textarea {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  .back-link {
      margin-top: ${metrics.baseMargin * 2}px;
      color: ${(props) => props.theme.colors.secondaryTitleColor};
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      transition: opacity 200ms ease;

      > svg {
        margin-right: ${metrics.baseMargin - 12}px;
      }

      &:hover {
        opacity: 0.8;
      }
    }

    .Toastify__toast {
      border-radius: ${metrics.borderRadius}px;
    }
`;
