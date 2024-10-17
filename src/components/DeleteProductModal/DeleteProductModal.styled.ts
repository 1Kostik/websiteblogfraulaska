import { css } from "@emotion/react";

export const wrapper = css`
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
    margin-bottom: 30px;
  }

  & p {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.44px;
    margin-bottom: 20px;
  }

  & span {
    margin-bottom: auto;
    font-family: Arial;
    font-size: 22px;
    letter-spacing: 0.44px;
    color: var(--edit-color);
  }
`;

export const buttonStyle = css`
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
`;
