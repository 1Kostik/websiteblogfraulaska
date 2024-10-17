import { css } from "@emotion/react";

import { onDesktop, onTablet } from "@styles/mixins";

import radioChecked from "@assets/icons/radio-btn-checked.svg";
import radioUnchecked from "@assets/icons/radio-btn-unchecked.svg";
import checkboxChecked from "@assets/icons/checkbox-active.png";

export const formWrapper = css`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  ${onDesktop(css`
    row-gap: 40px;
  `)}

  & input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const groupWrapper = css`
  font-family: Fixel;
  color: var(--text-light-grey);

  ${onTablet(css`
    display: flex;
    column-gap: 16px;
  `)}

  ${onDesktop(css`
    column-gap: 20px;
  `)}

  & h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.36px;
    margin-bottom: 16px;

    ${onTablet(css`
      width: 312px;
    `)}

    ${onDesktop(css`
      font-size: 24px;
      letter-spacing: 0.48px;
    `)}
  }

  & > div {
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    ${onTablet(css`
      width: 360px;
    `)}

    ${onDesktop(css`
      width: 512px;
    `)}
  }

  & label {
    position: relative;
  }
`;

export const recipientStyle = css`
  & h3 {
    visibility: hidden;
    margin-bottom: 0;
    height: 0;
  }

  & label {
    display: flex;
    cursor: pointer;
  }

  & label::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    margin-right: 10px;
  }

  & input:checked + label::before {
    background: url(${checkboxChecked});
    background-position: center;
  }
`;

export const deliveryTypes = css`
  display: flex;
  column-gap: 12px;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  & label {
    padding: 8px 20px 7px 20px;
    border-radius: 16px;
    border: 1px solid var(--border-light-grey);
    cursor: pointer;

    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.6px;

    ${onDesktop(css`
      padding: 12px 24px 11px 24px;
      font-size: 16px;
    `)}

    &:last-of-type {
      margin-right: -20px;
    }
  }

  & input {
    position: absolute;
    appearance: none;
    width: 0px;
    height: 0px;
    margin: -1px;
    opacity: 0;
  }

  & input:checked + label {
    color: var(--text-black);
    background-color: var(--bg-btn-grey);
  }
`;

export const paymentMethods = css`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;

  ${onDesktop(css`
    font-size: 14px;
  `)}

  & input {
    position: absolute;
    appearance: none;
    width: 0px;
    height: 0px;
    margin: -1px;
    opacity: 0;

    &:checked + label {
      background-color: var(--bg-light-grey);
      color: var(--text-black);
      &::before {
        background: url(${radioChecked});
      }
    }
  }

  & label {
    position: relative;
    padding: 16px 16px 16px 48px;
    border-radius: 16px;
    border: 1px solid var(--border-light-grey);
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
      display: block;
      width: 24px;
      height: 24px;
      background: url(${radioUnchecked});
    }
  }
`;

export const NPDeliveryWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
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

export const errorStyle = css`
  position: absolute;
  bottom: -18px;
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
