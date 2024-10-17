import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const boxContainer = css`
  padding: 24px 0;
  ${onDesktop(css`
    padding: 40px 0;
  `)}
`;

export const titleStyle = css`
  margin-bottom: 16px;

  font-size: 22px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.44px;
  color: var(--text-light-grey);

  ${onDesktop(css`
    margin-bottom: 20px;

    font-size: 32px;
    letter-spacing: 0.64px;
  `)}
`;

export const contentContainer = css`
  ${onTablet(css`
    display: flex;
    gap: 16px;
  `)}

  ${onDesktop(css`
    gap: 20px;
  `)}
`;

export const imgThumb = css`
  width: 100%;
  height: auto;
`;

export const qaWrapper = css`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
`;

export const qaCard = (isOpen: boolean) => css`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  padding: 12px 24px;

  border-radius: 16px;
  border: ${isOpen
    ? "1px solid var(--border-gray)"
    : "1px solid var(--border-light-grey)"};
  background: ${isOpen ? "var(--bg-light-grey)" : "transparent"};

  color: ${isOpen ? "var(--text-black)" : "var(--text-light-grey)"};

  & h4 {
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.15px;

    ${onDesktop(css`
      font-size: 18px;
    `)}
  }

  & svg {
    transform: ${isOpen ? "rotate(0deg)" : "rotate(180deg)"};
  }

  & path {
    fill: ${isOpen ? "var(--text-black)" : "var(--text-light-grey)"};
  }

  & p {
    font-family: Arial;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.25px;

    ${onDesktop(css`
      font-size: 14px;
    `)}
  }
`;

export const titleWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;

  & button {
    height: 40px;
    padding: 10px;

    & path {
      transition: var(--effectDuration);
    }

    &:hover path {
      fill: var(--fill-cart-hover);
    }
  }
`;
