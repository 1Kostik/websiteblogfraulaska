import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0;

  color: var(--text-light-grey);

  ${onTablet(css`
    flex-direction: row;
    flex-wrap: wrap;
  `)}

  ${onDesktop(css`
    gap: 20px;
    padding: 40px 0;
  `)}

  & div {
    ${onTablet(
      css`
        width: 336px;
      `
    )}
    ${onDesktop(
      css`
        width: 414px;
      `
    )}
  }

  & h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.15px;
    margin-bottom: 6px;

    ${onDesktop(css`
      font-size: 18px;
    `)}
  }

  & p {
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.25px;

    ${onDesktop(css`
      font-size: 14px;
    `)}
  }
`;
