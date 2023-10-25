import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* general variables */
  --box-shadow: 0 0 10px hsl(0, 0%, 93.33333333333333%);
  --box-shadow-2: 0px 0px 50px rgba(150, 150, 150, 0.3);
  --transition: all 0.3s linear;
  --transition2: all 0.5s linear;
  --border-radius: 0.5rem;
  --border-radius-2: 1rem;
  --line: 2px solid #4f62b7;
  --line-2: 2px solid rgb(28, 28, 192);
  --line-3: 2px solid rgb(9, 224, 88);

  /* variables for this project */
  --White: #ffffff;
  --Light-Cyan: hsl(193, 38%, 86%);
  --Neon-Green: hsl(150, 100%, 66%);
  --Grayish-Blue: hsl(217, 19%, 38%);
  --Dark-Grayish-Blue: hsl(217, 19%, 24%);
  --Dark-Blue: hsl(218, 23%, 16%);

    /* colors from the design */
--Very-Dark-Gray: hsl(0, 0%, 17%);
--Dark-Gray: hsl(0, 0%, 59%);

}

body {
  display: grid;
  font-family: "Rubik", "Open Sans", Arial, Helvetica, sans-serif;
  height: 100vh;
}

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.5rem;
    }
  }

  /* loading state */
.loading-state {
  animation: loading-spinner 0.5s linear infinite;
  border-radius: 50%;
  border: 5px solid var(--Neon-Green);
  border-top-color: var(--White);
  height: 6rem;
  margin: 5rem auto;
  width: 6rem;
}

@keyframes loading-spinner {
  to {
    transform: rotate(360deg);
  }
}
/* end of loading state */
`;

export default GlobalStyles;
