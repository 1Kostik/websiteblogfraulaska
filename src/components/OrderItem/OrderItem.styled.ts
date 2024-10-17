import { css } from "@emotion/react";

export const orderStatusStyles = (colorStyle: string) => css`
  background-color: ${colorStyle};
  &:hover {
    background-color: ${colorStyle ? colorStyle : "#393737"};
  }
`;
