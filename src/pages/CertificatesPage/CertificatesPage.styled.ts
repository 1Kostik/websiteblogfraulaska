import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const sectionStyle = css`
  padding: 80px 0px 24px 0px;
  background: var(--bg-black);
  ${onTablet(css`
    padding: 80px 0px 24px 0px;
  `)}
  ${onDesktop(css`
    padding: 80px 0px 40px 0px;
  `)}
`;
export const imgGalery = css`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  ${onTablet(css`
    gap: 15px;
  `)}
  ${onDesktop(css`
    gap: 12px;
  `)}
`;
export const title = css`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 40px;
  font-weight: 900;
  line-height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  ${onTablet(css`
    font-size: 88px;
  `)}
  ${onDesktop(css`
    font-size: 125px;
  `)}
`;
export const itemStyles = css`
  width: 320px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
  & img {
    object-fit: fill;
  }
  ${onTablet(css`
    width: 336px;
  `)}
  ${onDesktop(css`
    width: 420px;
  `)}
  &:hover {
    transform: scale(1.05);
  }
`;
export const btnBackStyles = css`
  cursor: pointer;
  &:hover {
    transform: scale(1.4);
    transition: transform 0.3 ease;
  }
`;
