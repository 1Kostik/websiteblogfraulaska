import { css } from "@emotion/react";
import { onDesktop, onTablet } from "./mixins";

export const containerStyles = css`
  width: 360px;
  margin: 0 auto;
  padding: 0 20px;

  ${onTablet(css`
    width: 768px;
    padding: 0 40px;
  `)}
  ${onDesktop(css`
    width: 1440px;
    padding: 0 78px;
  `)}
`;
