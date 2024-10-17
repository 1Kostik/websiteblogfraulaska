import { css, SerializedStyles } from "@emotion/react";

export const onTablet = (styles: SerializedStyles) => css`
  @media (min-width: 768px) {
    ${styles}
  }
`;

export const onDesktop = (styles: SerializedStyles) => css`
  @media (min-width: 1440px) {
    ${styles}
  }
`;
