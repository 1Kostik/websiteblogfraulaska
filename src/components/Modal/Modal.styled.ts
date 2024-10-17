import { css } from "@emotion/react";
import { IMyStyles } from "Interfaces/IMyStyles";

export const modalContainer = (myStyles: IMyStyles | undefined) => {
  return css`
    position: relative;
    width: ${myStyles?.width ? myStyles?.width : "500px"};
    height: ${myStyles?.height ? myStyles?.height : "400px"};
    padding: ${myStyles?.unset ? myStyles?.unset : "24px"};
    border: ${myStyles?.unset
      ? myStyles?.unset
      : "1px solid var(--border-color)"};
    box-shadow: ${myStyles?.unset
      ? myStyles?.unset
      : "-4px 4px 8px 0px rgba(30, 51, 86, 0.16)"};
    border-radius: 24px;
    background-color: ${myStyles?.unset ? myStyles?.unset : "var(--bg-black)"};

    & .closeBtn {
      position: absolute;
      top: 10px;
      right: 10px;

      border-radius: 50%;
      transition: var(--effectDuration);
      background-color:var(--bg-black-tranparent);
      &:hover {
        background-color: var(--btn-show-more-hover);
        & path {
          fill: var(--bg-deep-black);
        }
      }
    }
  `;
};
