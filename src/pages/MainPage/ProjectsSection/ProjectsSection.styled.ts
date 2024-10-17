import { css } from "@emotion/react";
import { onDesktop } from "@styles/mixins";

export const section = css`
  padding: 24px 0;

  ${onDesktop(css`
    padding: 40px 0;
  `)}
`;

export const projectsFlex = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  & h2 {
    padding-bottom: 20px;

    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.44px;
    color: var(--text-light-grey);

    ${onDesktop(css`
      font-size: 32px;
      letter-spacing: 0.64px;
    `)}
  }
`;
