import { css } from "@emotion/react";
import { onDesktop } from "@styles/mixins";
import lanaPhoto from "@assets/images/lana-next-to-window.webp";

export const photo = css`
  width: 100%;
  height: 922px;
  margin: 60px 0;

  background-image: url(${lanaPhoto});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${onDesktop(
    css`
      margin: 80px 0;
    `
  )}
`;
