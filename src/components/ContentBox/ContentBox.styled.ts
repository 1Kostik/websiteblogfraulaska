import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const paddingsForMyWay = css`
  padding: 0 !important;
`;

export const box = (
  contentGap: number | number[] = 0,
  changeDirection: boolean | undefined,
  type: string | undefined
) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${type === "info" ? "24px 0" : "0"};
  gap: ${Array.isArray(contentGap) ? contentGap[0] : contentGap}px;

  border: ${type === "projects"
    ? "1px solid var(--content-box-border);"
    : "none"};
  border-radius: ${type === "myWay" ? "0" : "12px"};

  ${onTablet(css`
    flex-direction: ${changeDirection ? " row-reverse" : "row"};
    gap: ${Array.isArray(contentGap) ? contentGap[1] : contentGap}px;
  `)}

  ${onDesktop(css`
    gap: ${Array.isArray(contentGap) ? contentGap[2] : contentGap}px;
    padding: ${type === "info" ? "40px 0" : "0"};
  `)}
`;

export const textContainer = (type: string | undefined) => css`
  width: 100%;
  padding: ${type === "projects" ? "24px" : "0"};
  color: var(--text-light-grey);

  ${onTablet(css`
    width: ${type === "projects" ? "338px" : "100%"};
  `)}

  ${onDesktop(css`
    width: ${type === "projects" ? "636px" : "100%"};
    padding: ${type === "projects" ? "32px" : "0"};
  `)}

  & h3 {
    margin-bottom: 40px;

    font-size: 18px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.36px;

    ${onDesktop(css`
      font-size: 24px;
      letter-spacing: 0.48px;
    `)}
  }

  & p {
    ${type === "info" &&
    css`
      font-family: Inter;
      font-size: 18px;
      line-height: 120%;

      ${onDesktop(css`
        font-size: 24px;
      `)}
    `}

    ${type === "projects" &&
    css`
      margin-bottom: 24px;
      font-size: 12px;
      line-height: 24px;
      letter-spacing: 0.25px;

      ${onDesktop(css`
        font-size: 14px;
      `)}
    `}
  }

  & a {
    position: relative;
    display: block;
    width: 50px;
    padding: 8px 0;

    font-family: Fixel;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: inherit;

    ${onDesktop(css`
      width: 58px;
      font-size: 14px;
    `)}
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      border-bottom: 1px solid transparent;
    }
    &:hover::after {
      border-bottom: 2px solid var(--text-light-grey);
    }
  }
`;

export const imgThumb = (
  isHideMobileImg: boolean | undefined,
  type: string | undefined,
  photo: string | undefined,
  boxHeight: number | undefined
) =>
  css`
    display: ${isHideMobileImg ? "none" : "block"};
    width: 100%;
    height: ${boxHeight}px;
    border-radius: ${type === "myWay" ? "0" : "12px"};
    overflow: hidden;

    background-image: url(${photo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    ${onTablet(css`
      display: block;
    `)}

    ${type === "projects" &&
    css`
      height: 380px;

      ${onTablet(css`
        width: ${type === "projects" ? "338px" : "100%"};
        height: auto;
      `)}
      ${onDesktop(css`
        width: ${type === "projects" ? "636px" : "100%"};
        height: 380px;
      `)}
    `}

    ${type === "myWay" &&
    css`
      ${onTablet(css`
        height: 640px;
      `)}
      ${onDesktop(css`
        height: 820px;
      `)}
    `}
  `;

export const myWayContenContainer = css`
  display: flex;
  flex-direction: column;
  padding: 24px 20px;

  font-family: Arial;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: var(--text-light-grey);

  ${onTablet(css`
    padding: 24px 0 24px 40px;
  `)}
  ${onDesktop(css`
    padding: 32px 0 32px 78px;
    font-size: 14px;
  `)}
`;

export const titleContainer = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  font-size: 22px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.44px;

  ${onTablet(css`
    padding-right: 40px;
  `)}

  ${onDesktop(css`
    padding-right: 78px;
    font-size: 32px;
    letter-spacing: 0.64px;
  `)}

  & button {
    background-color: transparent;
  }

  & path {
    fill: var(--text-light-grey);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    bottom: -40px;
    border-top: 1px solid var(--text-light-grey);
    ${onTablet(css`
      width: 304px;
    `)}
    ${onDesktop(css`
      width: 564px;
    `)}
  }
`;

export const btnWrapper = css`
  display: flex;
  gap: 6px;

  transition: var(--effectDuration);

  &:hover path {
    fill: var(--btn-show-more-hover);
  }

  ${onTablet(css`
    gap: 12px;
  `)}
`;

export const swiperContainer = css`
  width: 340px;
  padding-top: 32px;

  ${onTablet(css`
    width: 344px;
  `)}

  ${onDesktop(css`
    width: 642px;
  `)}
`;

export const slideStyle = css`
  display: flex;
  flex-direction: column;

  & p:first-of-type {
    margin-bottom: 16px;
  }
`;

export const linkWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const linkStyle = css`
  position: relative;
  display: block;

  width: 130px;
  padding: 10px 0;

  font-family: Arial;
  font-size: 22px;
  line-height: 140%;
  color: var(--text-light-grey);
  transition: var(--effectDuration);

  &:hover {
    transform: scale(1.03);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom: 1px solid var(--text-light-grey);
  }

  &:hover::after {
    border-bottom: 3px solid var(--text-light-grey);
  }
`;
