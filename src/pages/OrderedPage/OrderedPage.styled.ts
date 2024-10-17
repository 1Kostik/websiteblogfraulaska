import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const sectionStyle = css`
  padding-top: 72px;
  padding-bottom: 36px;
  height: 66vh;

  & h1 {
    padding-top: 24px;
    font-size: 48px;
    font-weight: 800;
    color: var(--text-white);
    padding: 10px 0;
  }

  & p {
    font-family: Inter;
    font-size: 14px;
    line-height: 120%;
    color: var(--text-light-grey);
  }

  & p:last-of-type {
    font-family: Fixel;
    letter-spacing: 0.4px;
    line-height: 120%;
    margin-top: 16px;
  }

  ${onTablet(
    css`
      & h1 {
        font-size: 64px;
      }

      & p {
        font-size: 18px;
      }
    `
  )}

  ${onDesktop(css`
    padding-top: 80px;
    height: 60vh;

    & h1 {
      font-size: 100px;
      padding: 30px 0;
    }

    & p {
      font-size: 24px;
    }

    & p:last-of-type {
      margin-top: 32px;
    }
  `)}
`;

export const linkStyle = css`
  position: relative;
  display: block;

  width: 155px;
  padding: 10px 0;
  margin-top: 6px;

  font-family: Arial;
  font-size: 16px;
  line-height: 140%;
  color: var(--text-light-grey);
  transition: var(--effectDuration);

  ${onDesktop(css`
    width: 230px;
    margin-top: 12px;
    font-size: 24px;
  `)}

  &:hover {
    transform: scale(1.02);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom: 1px solid var(--text-light-grey);
  }

  &:hover::after {
    border-bottom: 3px solid var(--text-light-grey);
  }
`;
