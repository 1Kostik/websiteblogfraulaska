import { css } from "@emotion/react";

export const modalContainer = (myStyles: string | undefined) => {
  return css`
    position: relative;
    padding: ${myStyles ? myStyles : "24px"};
    border: ${myStyles ? myStyles : "1px solid var(--border-color)"};
    box-shadow: ${myStyles
      ? myStyles
      : "-4px 4px 8px 0px rgba(30, 51, 86, 0.16)"};
    border-radius: 24px;
    background-color: ${myStyles ? myStyles : "var(--bg-black)"};

    & .closeBtn {
      position: absolute;
      top: 10px;
      right: 10px;

      border-radius: 50%;
      transition: var(--effectDuration);
      background-color: var(--bg-black-tranparent);
      &:hover {
        background-color: var(--btn-show-more-hover);
        & path {
          fill: var(--bg-deep-black);
        }
      }
    }
  `;
};
