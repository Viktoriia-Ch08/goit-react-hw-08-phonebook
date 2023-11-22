import { css } from 'styled-components';

export const responsive = {
  tablet: {
    standard: (...args) => css`
      @media (min-width: 768px) {
        ${css(...args)};
      }
    `,
  },
  desktop: {
    standard: (...args) => css`
      @media (min-width: 1200px) {
        ${css(...args)};
      }
    `,
  },
};
