import { css } from "@emotion/react";

export const tableStyles = css`
  width: 100%;
  height: 100%;

  & th,
  td {
    text-align: left;
    transition: transform 0.3s ease;
  }
  & th:nth-of-type(9),
  & th:last-child {
    text-align: center;
  }

  & td:nth-of-type(9) {
    text-align: center;
    height: 24px;
    cursor: pointer;
  }
  & td:nth-of-type(9):hover {
    transform: scale(1.4);
  }
  & td:last-child {
    display: flex;
    justify-content: center;
    height: 24px;
    align-items: center;
    cursor: pointer;
  }
  & td:last-child:hover {
    transform: scale(1.4);
  }
  & td:nth-of-type(7),
  & td:nth-of-type(8) {
    overflow: visible;
    cursor: pointer;
  }
`;
export const theadStyles = css`
  width: 1284px;
  height: 30px;
  display: block;
`;
export const trHeadsStyles = css`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid white;
  display: block;
`;
export const thHeadsStyles = css`
  width: 127px;
  height: 24px;
  overflow: hidden;
  color: var(--White, #d7d7d7);
  font-variant-numeric: stacked-fractions ordinal;
  font-feature-settings: "case" on, "rvrn" on, "hist" on;
  text-overflow: ellipsis;
  font-family: Arial;
  font-size: var(--Typography-sm, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;
`;
export const tbodyStyles = css`
  display: block;
  margin-top: 10px;
`;
export const trtbodyStyles = css``;
export const tdArrow = css`
  font-size: 16px;
  color: var(--White, #d7d7d7);
`;
export const tdTrash = css`
  display: unset;
  font-size: 16px;
  color: var(--White, #d7d7d7);
`;
