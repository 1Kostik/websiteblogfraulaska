import { css } from "@emotion/react";

export const colorPickerStyle = css`
  padding: 16px;
  border-radius: 16px;
  border: 1px solid var(--border-light-grey);

  & .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    & svg {
      width: 24px;
      height: 24px;
      fill: var(--text-light-grey);
    }
  }

  & h3 {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: var(--text-light-grey);
  }
`;

export const colorsWrapper = css`
  display: flex;
  column-gap: 10px;
  & path {
    fill: var(--text-black);
  }
`;

export const inputStyle = (color: string) => css`
  display: none;

  & + label {
    display: block;
    width: 40px;
    height: 40px;
    padding: 7px;

    border-radius: 12px;
    background-color: ${color};
    border: 1px solid transparent;
    cursor: pointer;
  }
`;
