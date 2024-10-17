import { css } from "@emotion/react";
import { StylesConfig } from "react-select";

import { onDesktop, onTablet } from "@styles/mixins";

import checkboxFalse from "@assets/icons/check_box_false.png";
import checkboxTrue from "@assets/icons/check_box_true.png";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 24px 0;

  ${onTablet(css`
    flex-direction: row;
    gap: 16px;
  `)}

  ${onDesktop(css`
    gap: 20px;
    padding: 40px 0;
  `)}
`;

export const descriptionWrapper = css`
  width: 100%;

  color: var(--text-light-grey);

  & h3 {
    font-size: 22px;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0.44px;
    margin-bottom: 6px;

    ${onDesktop(css`
      font-size: 32px;
      margin-bottom: 8px;
    `)}
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

export const formWrapper = css`
  width: 100%;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  & label {
    position: relative;
  }
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
  color: var(--text-dark-grey);
  &::placeholder {
    color: var(--text-dark-grey);
  }

  ${onDesktop(css`
    font-size: 14px;
  `)}
`;

export const messageInput = css`
  ${inputStyle}
  min-height: 132px;
  resize: none;
`;

export const errorStyle = css`
  position: absolute;
  font-size: 12px;
  line-height: 16px;
  color: red;
`;

export const agreementStyle = css`
  position: relative;
  padding-left: 32px;

  font-family: Arial;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: var(--text-dark-grey);
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    position: absolute;

    left: 0;
    width: 24px;
    height: 24px;
    background: url(${checkboxFalse});
  }

  ${onDesktop(css`
    font-size: 14px;
  `)}
`;

export const checkboxStyle = css`
  position: absolute;
  appearance: none;
  width: 0px;
  height: 0px;
  margin: -1px;
  opacity: 0;

  &:checked ~ label::before {
    background: url(${checkboxTrue});
  }
`;

export const submitStyle = css`
  padding: 10px 16px;

  border-radius: 24px;
  background-color: var(--bg-btn-grey);
  box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);

  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;

  transition: var(--effectDuration);

  ${onDesktop(css`
    font-size: 14px;
  `)}

  &:hover {
    background-color: var(--bg-btn-submit);
    box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
  }
`;

export const selectInputStyle = (isError: boolean) => css`
  display: flex;
  ${inputStyle}

  & .select__value-container {
    padding: 0;
  }

  & .select__input-container {
    margin: 0;
    padding: 0;
  }

  & .select__indicator {
    padding: 2px;
  }

  ${isError &&
  css`
    border: 1px solid red;
  `}
`;

export const optionStyle = css`
  display: flex;
  position: relative;
  align-items: center;
  padding: 8px 8px 8px 39px;
  font-family: Arial;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: var(--text-light-grey);

  cursor: pointer;

  & img {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 10px;
  }

  &:hover {
    color: var(--fill-cart-hover);
  }
`;

const menuStyle = css`
  position: absolute;
  z-index: 100;
  width: 100%;
  margin-top: 6px;
  background-color: var(--bg-black);
  border-radius: 12px;
  border: 1px solid var(--bg-btn-submit);
  box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
`;

export type OptionType = { value: string; label: string };

export const customStyles: StylesConfig<OptionType> = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#bfbfbf",
    "&:hover": {
      color: "#bfbfbf54",
    },
    transition: "transform 0.2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "",
  }),

  menu: (provided) => ({
    ...provided,
    ...menuStyle,
  }),

  option: (provided) => ({
    ...provided,
    ...optionStyle,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#bfbfbf",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "#bfbfbf",
  }),
};
