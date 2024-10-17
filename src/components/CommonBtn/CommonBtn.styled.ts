import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  transition: all var(--effectDuration);

  &.disabled {
    opacity: 0;
    pointer-events: none;
  }
`;

export const contentStyles = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  ${containerStyles}
`;

export const StyledContent = styled.div`
  ${contentStyles}
`;
