import { css } from "@emotion/react";

export const overlayStyle = css`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-overlay);
`;
