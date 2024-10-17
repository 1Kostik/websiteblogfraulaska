import { css } from "@emotion/react";
import { onDesktop } from "@styles/mixins";

export const svgSearch = css`
  color: var(--bg-light-grey);
  width: 20px;
  height: 20px;
  z-index: 10;
`;

export const inputSearch = css`
  color: var(--bg-light-grey);
  background: var(--bg-black);
  width: 200px;
  height: 40px;
  border: 1px solid var(--bg-light-grey);
  padding: 8px 12px 8px 38px;
  border-radius: 24px;

  &::placeholder {
    color: var(--bg-light-grey);
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.25px;
  }

  &:focus {
    outline: none;
  }
`;

export const openSearch = css`
  background: var(--bg-black);
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 8px 8px 8px 8px;
  justify-content: flex-end;
`;

export const search = css`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  left: 12px;
`;

export const container = css`
  display: flex;
`;

export const inputContainer = css`
  position: relative;
  display: flex;
`;

export const svgClose = css`
  color: var(--bg-light-grey);
  width: 16px;
  height: 16px;
  z-index: 10;
`;

export const btnClose = css`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 12px;
  top: 0;
  right: 0;

  ${onDesktop(css`
    display: none;
  `)}
`;
