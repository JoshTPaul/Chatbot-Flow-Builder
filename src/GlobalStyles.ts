import { createGlobalStyle } from "styled-components";

/*
  INFO: I've been using styled-components for a while now, and it's been great.
  Since it's a CSS-in-JS solution, it is much easier to handle styling based on JS.
*/

const GlobalStyles = createGlobalStyle`
/* 
  CSS RESET
  From https://www.joshwcomeau.com/css/custom-css-reset/ 
*/

/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
/*
    2. Remove default margin
  */
* {
  margin: 0;
}
/*
    Typographic tweaks!
    3. Add accessible line-height
    4. Improve text rendering
  */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
    5. Improve media defaults
  */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
    6. Remove built-in form typography styles
  */
input,
button,
textarea,
select {
  font: inherit;
}
/*
    7. Avoid text overflows
  */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
/*
    8. Create a root stacking context
  */
#root,
#__next {
  isolation: isolate;
}



/* GLOBAL STYLES */

body {
  --primary: #527ced;
  --neutral0: #000;
  --neutral700: #dcdcdc;
  --neutral800: #f3f3f3;
  --neutral900: #fff;

  --success: #b2eab2;
  --danger: #fbcbca;

  margin: 0;
  color: var(--neutral0);
  font-family: sans-serif;
}

body,
#root {
  min-height: 100dvh;
}

#root {
  display: flex;
  flex-direction: column;
}

header {
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: auto 400px;
  place-items: center;
  background-color: var(--neutral800);
}

button {
  appearance: none;
  color: var(--primary);
  background-color: var(--neutral900);
  border: 2px solid currentColor;
  padding: 0.75rem;
  width: 180px;
  border-radius: 0.25rem;
  box-shadow: none;
  font-weight: 600;
  grid-column: 2/3;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--neutral800);
  }
}

main {
  display: grid;
  grid-template-columns: auto 400px;
  flex-grow: 1;
}

aside {
  border: 1px solid var(--neutral700);
}

/* 
    React Flow overrides
*/

.react-flow__handle {
    width: 0.5rem;
    height: 0.5rem;
}

`;

export default GlobalStyles;
