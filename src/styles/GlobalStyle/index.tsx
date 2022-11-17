import { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyleLayout = createGlobalStyle`

    :root {

    /* Primary palette */

    --color-purple: 122, 99,  255;
    --color-purple-light: 188, 176, 255;
    --color-purple-dark: 61, 50, 128;
    --color-black: 30, 30, 30;
    --color-white: 255, 255, 255;

    /* Feeback pallete: */

    --color-success-green: 63, 232, 100; 
    --color-negative-pink: 241, 41, 41;

    /* Text colors: */

    --color-text-black: 0, 0, 0;
    --color-text-white: 255, 255, 255;

    /* Grey scale palette: */

    --color-grey-4: 18, 18, 20;
    --color-grey-3: 33, 37, 41;
    --color-grey-2: 52, 59, 65;
    --color-grey-1: 134, 142, 150;


    --font-base: 'Montserrat', sans-serif;
    font-family: var(--font-base);
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, textarea, input, select {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
        text-decoration: none;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        /* line-height: 1;
        overflow-y: scroll; */
        overflow-x: hidden;
        /* background-color: rgba(var(--color-grey-4)); */
        font-family: (var(--font-base));

    }

    .root {
        background-color: rgba(var(--color-grey-2), 1);
    }


    /* body::-webkit-scrollbar {
        width: 10px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: rgba(var(--color-grey-2), 1);
        border-radius: 10px;
    } */

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, 
    blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    button {
        border: none;
        cursor: pointer;
    }

    html, body, #root {
        height: 100vh;
        width: 100vw;
    }
    /* * {
        outline: 1px solid blue;
    } */
`;

interface IGlobalStyleProps {
  children: ReactNode;
}

const GlobalStyle = ({ children }: IGlobalStyleProps) => {
  return (
    <>
      <GlobalStyleLayout />
      {children}
    </>
  );
};

export default GlobalStyle;
