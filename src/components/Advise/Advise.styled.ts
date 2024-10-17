import { css } from "@emotion/react";
import { onDesktop } from "@styles/mixins";

export const adviseContainer = css`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  padding: 24px 0;

  font-size: 22px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.44px;
  color: var(--text-light-grey);

  ${onDesktop(css`
    padding: 40px 0;

    font-size: 32px;
    letter-spacing: 0.64px;
  `)}

  & a {
    height: 64px;
    border-radius: 4px;
    padding: 16px;
    background-color: var(--bg-light-grey);
    transition: var(--effectDuration);
    cursor: pointer;

    &:hover {
      background-color: var(--bg-btn-submit);
    }
  }
`;
