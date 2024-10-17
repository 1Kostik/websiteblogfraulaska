import { css } from "@emotion/react";
import { onDesktop } from "@styles/mixins";

export const cardContainer = (cardHeight: number | undefined) => css`
  height: ${cardHeight}px;
  padding: 40px;
  border-radius: 16px;
  background-color: var(--bg-deep-black);

  color: var(--text-light-grey);

  & h3 {
    font-size: 12px;
    font-weight: 600;
    line-height: 110%;
    letter-spacing: 1.6px;
    margin-bottom: 24px;

    ${onDesktop(css`
      font-size: 16px;
    `)}
  }

  & > p {
    font-size: 22px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0.44px;
    margin-bottom: 24px;

    ${onDesktop(css`
      font-size: 32px;
    `)}
  }

  & a {
    display: block;
    width: 100%;
    padding: 10px 16px;
    border-radius: 24px;
    border: 1px solid var(--border-light-grey);
    margin-bottom: 24px;

    text-align: center;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: inherit;

    transition: var(--effectDuration);

    &:hover {
      border: 1px solid var(--btn-show-more-hover);
      box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
      color: var(--btn-show-more-hover);
    }

    ${onDesktop(css`
      font-size: 14px;
    `)}
  }
`;

export const infoWrapper = css`
  display: flex;
  gap: 8px;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  & p {
    width: 208px;
    font-family: Arial;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.25px;

    ${onDesktop(css`
      width: 308px;
      font-size: 14px;
    `)}
  }
`;
