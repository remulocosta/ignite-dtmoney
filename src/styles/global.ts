import { createGlobalStyle } from 'styled-components';

/**
 * CODE
 */
const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #ffffff;

    --blue-light: #6933ff;
    --blue: #5429cc;
    --green: #33cc95;
    --red: #e52e4d;
    --white: #ffffff;

    --text-body: #969cb3;
    --text-title: #363f5f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; /* 15px */
    }

    @media(max-width: 720px) {
      font-size: 87.5%;  /* 14px */
    }

    @media(max-width: 480px) {
      font-size: 75%;  /* 12px */
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;


/**
 * EXPORTS
 */
export {
  GlobalStyle
}
