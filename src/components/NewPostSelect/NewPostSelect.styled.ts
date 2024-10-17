import { css } from "@emotion/react";

export const selectContainer = css`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const inputWrapper = css`
  position: relative;

  & input {
    width: 100%;
  }

  & div {
    position: absolute;
    top: 50%;
    left: 0;
    pointer-events: none;
    transform: translateY(-50%);

    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 12px;

    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1px;
  }
`;

export const listStyle = css`
  position: absolute;
  top: 54px;
  z-index: 2;
  width: 100%;
  max-height: 150px;
  padding: 10px;
  overflow-y: auto;

  border: 1px solid var(--border-color);
  border-radius: 12px;
  background-color: var(--bg-black);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6c6767;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: #b7b7b7;
    border-radius: 12px;
  }

  & p {
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
    &:hover {
      background-color: var(--bg-tranparent);
    }
  }
`;
