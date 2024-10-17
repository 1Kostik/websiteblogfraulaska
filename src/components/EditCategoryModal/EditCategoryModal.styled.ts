import { css } from "@emotion/react";

export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  color: var(--text-light-grey);

  & h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.48px;
    margin-bottom: 10px;
  }

  & p {
    margin-bottom: 30px;
    font-family: Arial;
    font-size: 22px;
    letter-spacing: 0.44px;
    color: var(--edit-color);
  }

  & label {
    margin-bottom: 10px;
    font-size: 18px;
    align-self: start;
  }

  & #newName {
    width: 100%;
    padding: 12px;
    margin-bottom: auto;
    border-radius: 16px;
    border: 1px solid var(--border-gray);
    background-color: transparent;

    font-family: Fixel;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: var(--text-dark-grey);

    &::placeholder {
      color: var(--text-dark-grey);
    }
  }

  & button {
    width: 100%;
    padding: 12px 16px;
    border-radius: 24px;
    border: 1px solid var(--bg-btn-grey);

    font-size: var(--Typography-sm, 14px);
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.1px;
    color: var(--text-black);

    background-color: var(--bg-btn-grey);
  }
`;
