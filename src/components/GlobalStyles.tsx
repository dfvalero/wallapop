import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { colors, typography } from '../constants';

const boxSizing = css`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const defaultFont = css`
  html,
  body {
    font-family: ${typography.primary};
    font-size: ${typography.sizes.body};
    line-height: 1.4;
  }
`;

const body = css`
  body {
    background: ${colors.white};
    color: ${colors.black};
  }
`;

const image = css`
  img {
    max-width: 100%;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${boxSizing}
  ${defaultFont}
  ${body}
  ${image}
`;
