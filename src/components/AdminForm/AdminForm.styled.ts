import { css } from "@emotion/react";
import { onDesktop } from "@styles/mixins";

export const pageTitle = css`
  padding-bottom: 40px;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.64px;
  color: var(--text-light-grey);
`;

export const formDataWrapper = css`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 844px;
  color: grey;

  & .errorContainer {
    position: relative;
  }
`;

export const blockWrapper = css`
  padding: 18px 16px;
  border-radius: 16px;
  border: 1px solid var(--border-light-grey);

  & h2 {
    min-width: 150px;
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.48px;
    color: var(--text-light-grey);

    ${onDesktop(css`
      width: 312px;
    `)}
  }
`;

export const commonBlock = css`
  display: flex;
  column-gap: 20px;
`;

export const categoryFields = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const inputFieldStyle = css`
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--border-gray);
  background-color: transparent;

  font-family: Fixel;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: var(--text-light-grey);

  &::placeholder {
    color: var(--text-light-grey);
  }
`;

export const inputLabel = (isShow: boolean) => css`
  position: absolute;
  top: 12px;
  left: 10px;
  opacity: 0;
  transition: var(--effectDuration);
  ${isShow &&
  css`
    top: -10px;
    left: 14px;
    opacity: 1;
  `}
  width: fit-content;
  padding: 4px 8px 2px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background-color: var(--bg-black);

  pointer-events: none;

  font-family: Fixel;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.1px;
  color: var(--text-light-grey);
`;

export const textAreaStyle = css`
  overflow-y: hidden;
  resize: vertical;
  width: 100%;
  min-height: 66px;
`;

export const titleImagesWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const addImagesBtn = css`
  width: 172px;
  padding: 10px 16px;
  border-radius: 24px;
  border: 1px solid var(--border-light-grey);

  font-family: Fixel;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: var(--text-light-grey);

  cursor: pointer;

  transition: var(--effectDuration);

  &:hover {
    border: 1px solid var(--color, #a5a5a5);
    box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
    color: var(--btn-show-more-hover);
  }

  & ~ input {
    display: none;
  }
`;

export const imagesContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const imageWrapper = css`
  position: relative;

  border: 1px solid var(--border-color);
  border-radius: 16px;

  &:first-of-type {
    border-radius: 16px;
    border: 1px solid green;
  }

  & .main-photo-btn {
    position: absolute;
    top: 8px;
    left: 8px;

    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 8px;
    background-color: var(--bg-btn-grey);

    & path {
      fill: var(--bg-deep-black);
    }
  }
  & .close-btn {
    position: absolute;
    right: 8px;
    top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;

    background-color: var(--bg-btn-grey);

    & path {
      fill: var(--bg-black);
    }
  }
`;

export const imageThumb = css`
  width: calc((800px - (3 * 14px)) / 4);
  height: 174px;
  border-radius: 15px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const variationsContainer = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const variationWrapper = css`
  display: flex;
  align-items: start;
  column-gap: 20px;
  width: 100%;
`;

export const reviewsContainer = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
`;

export const reviewWrapper = css`
  display: flex;
  align-items: start;
  column-gap: 20px;
  width: 100%;
  padding: 16px 12px;
  border-radius: 16px;
  border: 1px solid var(--border-light-grey);
`;

export const trashCan = css`
  width: 24px;
  height: 24px;
  fill: var(--text-light-grey);
`;

export const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 10px 16px;
  border-radius: 24px;
  border: 1px solid var(--bg-btn-grey);

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: var(--text-black);

  background-color: var(--bg-btn-grey);
  transition: var(--effectDuration);

  &:hover {
    background: var(--btn-show-more-hover);
    border: 1px solid var(--btn-show-more-hover);
    box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
  }

  & svg {
    width: 20px;
    height: 20px;
    margin-left: 8px;
    fill: var(--text-black);
  }
`;

export const submitWrapper = css`
  width: 100%;
  height: 74px;
  ${blockWrapper}

  & button {
    ${buttonStyle}
  }
`;

export const errorStyle = css`
  position: absolute;
  bottom: -16px;
  font-size: 12px;
  padding-top: 1px;
  color: var(--error-color);

  &.text-area-error {
    bottom: -12px;
  }

  &.images-error {
    right: 16px;
    bottom: 16px;
  }
`;
