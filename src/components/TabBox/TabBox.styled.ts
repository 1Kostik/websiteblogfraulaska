import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const container = (arrLength: number) => css`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  width: 100%;
  padding: 24px 0;

  ${onDesktop(css`
    row-gap: ${arrLength > 1 ? "40px" : "24px"};
    padding: 40px 0;
  `)}
`;

export const titleWrapper = (wrapperWidth: number | undefined) =>
  css`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.44px;
    color: var(--bg-light-grey);

    ${onTablet(css`
      flex-direction: row;
      & h3 {
        width: ${wrapperWidth && wrapperWidth / 2}px;
      }
      & div {
        width: ${wrapperWidth && wrapperWidth / 2}px;
      }
    `)}

    ${onDesktop(css`
      font-size: 32px;
      letter-spacing: 0.64px;
    `)}
  `;

export const buttonsWrapper = css`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  ${onDesktop(css`
    gap: 16px;
  `)}
`;

export const titleButtons = css`
  padding: 8px 20px;
  border-radius: 16px;
  border: 1px solid var(--text-light-grey);

  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.6px;
  color: var(--bg-light-grey);

  transition: var(--effectDuration);

  ${onDesktop(css`
    font-size: 16px;
    padding: 12px 24px;
  `)}

  &:hover {
    color: var(--btn-show-more-hover);
    box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
  }
`;

export const activeStyle = css`
  background: var(--bg-btn-grey);
  color: var(--text-black);

  &:hover {
    color: var(--text-black);
  }
`;

export const contentWrapper = css`
  display: flex;
  column-gap: 16px;
  width: 100%;

  ${onDesktop(css`
    column-gap: 20px;
  `)}
`;

export const imgThumb = (
  wrapperWidth: number | undefined,
  isHideRadius: boolean,
  imgThumbHeight: number
) => css`
  display: none;
  width: ${wrapperWidth && wrapperWidth / 2}px;
  border-radius: ${isHideRadius ? "0" : "34px"};
  overflow: hidden;

  font-family: Arial;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 1px;
  color: var(--text-light-grey);

  ${onTablet(css`
    display: block;
    height: 416px;
  `)}

  ${onDesktop(css`
    height: ${imgThumbHeight + "px"};
    font-size: 20px;
  `)}

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const infoContainer = (
  wrapperWidth: number | undefined,
  imgThumbHeight: number,
  isShowMore: boolean
) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 16px;

  color: var(--bg-light-grey);

  ${onTablet(css`
    width: ${wrapperWidth && wrapperWidth / 2}px;
  `)}

  ${onDesktop(css`
    height: ${!isShowMore ? imgThumbHeight + "px" : "auto"};
    row-gap: 20px;
  `)}
`;

export const textWrapper = (isShowMore: boolean) => css`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  height: ${isShowMore ? "auto" : "314px"};
  overflow: ${isShowMore ? "initial" : "hidden"};

  ${onTablet(css`
    height: ${isShowMore ? "auto" : "359px"};
  `)}
  ${onDesktop(css`
    height: ${isShowMore ? "auto" : "540px"};
  `)}

  & h4 {
    font-size: 12px;
    font-weight: 600;
    line-height: 110%;
    letter-spacing: 1.6px;
    margin-bottom: 6px;

    ${onDesktop(css`
      font-size: 16px;
      margin-bottom: 8px;
    `)}
  }

  & p {
    font-family: Arial;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.25px;

    ${onDesktop(css`
      font-size: 14px;
    `)}
  }
`;

export const showMoreBtn = css`
  width: 100%;
  padding: 10px 16px;
  text-align: center;

  border-radius: 24px;
  border: 1px solid var(--White, #d7d7d7);

  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: inherit;

  transition: var(--effectDuration);

  &:hover {
    border: 1px solid var(--btn-show-more-hover);
    box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
    color: var(--btn-show-more-hover);
  }

  ${onDesktop(css`
    font-size: 14px;
    font-weight: 600;
  `)}
`;
