import { css } from "@emotion/react";

export const btnBack = css`
  display: flex;
  color: #d7d7d7;
  font-size: 25px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
export const titleContainer = css`
  width: 100%;
  height: 40px;
  display: flex;

  gap: 8px;
`;
export const title = css`
  color: var(--White, #d7d7d7);
  font-variant-numeric: ordinal;
  font-feature-settings: "case" on, "cpsp" on, "rvrn" on, "hist" on;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--White, #d7d7d7);
  font-family: Fixel;
  font-size: var(--Typography-3xl, 32px);
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.64px;
`;
export const wrapper = css`
  display: flex;
  gap: 12px;
  padding: 40px 0px;
`;
export const infoContainer = css`
  display: flex;
  flex-direction: column;
  width: 636px;
  height: 80vh;
  gap: 24px;
`;
export const itemsContainer = css`
  display: flex;
  flex-direction: column;
  width: 636px;
  height: 80vh;
  gap: 8px;
`;
export const titleH2 = css`
  color: var(--White, #d7d7d7);
  font-family: Fixel;
  font-size: var(--Typography-sm, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
`;
export const infoWrapper = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const infoWrapperBtn = css`
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const description = css`
  width: 312px;
  color: var(--color, #a5a5a5);
  font-family: Rubik;
  font-size: var(--Typography-xs, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
export const totalAmount = css`
  width: 150px;
  color: var(--White, #d7d7d7);
  text-align: right;
  font-variant-numeric: ordinal;
  font-feature-settings: "case" on, "rvrn" on, "hist" on;
  font-family: Fixel;
  font-size: var(--Typography-lg, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
`;
export const tdTrash = css`
  font-size: 16px;
  color: var(--White, #d7d7d7);
`;
export const btnDelete = css`
  font-size: 14px;
  border-radius: 16px;
  background-color: #d7d7d7;
  padding: 5px 23px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
