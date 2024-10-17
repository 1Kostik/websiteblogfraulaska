import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const formWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const formStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;

  width: 320px;
  height: 322px;
  padding: 24px 20px;
  border: 1px solid var(--border-gray);
  border-radius: 32px;

  ${onTablet(css`
    width: 488px;
  `)}
`;

export const errorAuthStyle = css`
  position: absolute;
  top: 16px;
  font-family: Fixel;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: yellow;
`;

export const labelStyle = css`
  position: relative;
  width: 100%;
`;

export const inputStyle = css`
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--border-gray);
  background-color: transparent;

  font-family: Fixel;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: var(--text-light-grey);

  &::placeholder {
    color: var(--text-light-grey);
  }

  ${onDesktop(css`
    font-size: 14px;
  `)}
`;

export const eyeWrapper = css`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const errorStyle = css`
  position: absolute;
  top: 48px;
  font-size: 12px;
  line-height: 16px;
  color: red;
`;

export const errorBorder = (isError: boolean) =>
  isError
    ? css`
        border: 1px solid red;
      `
    : css``;

export const submitStyle = css`
  width: 100%;
  padding: 10px 16px;

  border-radius: 24px;
  background-color: var(--bg-btn-submit);
  box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);

  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;

  ${onDesktop(css`
    font-size: 14px;
  `)}
`;
