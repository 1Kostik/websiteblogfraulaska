import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const titleWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  ${onDesktop(css`
    margin-bottom: 32px;
  `)}

  & h2 {
    width: 216px;

    font-size: 22px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0.44px;
    color: var(--text-light-grey);

    ${onTablet(css`
      width: auto;
    `)}

    ${onDesktop(css`
      font-size: 32px;
      letter-spacing: 0.64px;
    `)}
  }

  & div {
    display: flex;
    gap: 12px;

    ${onDesktop(css`
      display: none;
    `)}
  }

  & button {
    height: 40px;
    padding: 4px;

    & path {
      fill: var(--text-light-grey);
    }
  }
`;

export const swiperContainer = css`
  width: 340px;

  ${onTablet(css`
    width: 728px;
  `)}

  ${onDesktop(css`
    width: 1284px;
  `)}
`;
