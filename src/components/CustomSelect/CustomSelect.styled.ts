import { css } from "@emotion/react";
import { inputFieldStyle } from "@components/AdminForm/AdminForm.styled";

export const selectContainer = css`
  position: relative;
`;

export const selectorStyle = (isShowDropdown: boolean) => css`
  ${inputFieldStyle}
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .arrow {
    transform: ${isShowDropdown ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

export const dropdownStyle = css`
  position: absolute;
  top: 60px;
  z-index: 10;

  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 10px;
  background-color: var(--bg-btn-black);

  border: 1px solid var(--border-color);
  border-radius: 12px;

  & div {
    position: relative;
    display: flex;
    padding-left: 24px;

    & p {
      flex-grow: 1;
      font-family: Arial;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.4px;
      color: var(--text-light-grey);
      cursor: pointer;
    }

    & .checkIcon {
      position: absolute;
      left: 0;
      fill: var(--text-light-grey);
    }

    & .editBtn,
    .deleteBtn {
      padding: 0 4px;
    }

    & .editBtn {
      margin: 0 20px;
      & svg {
        fill: var(--edit-color);
      }
    }
    & .deleteBtn {
      padding: 0 10px;
      & svg {
        fill: var(--fill-delete-icon);
      }
    }
  }
`;
