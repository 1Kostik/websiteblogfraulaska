import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

import { HeroSectionProps } from "./HeroSection";
import { onDesktop, onTablet } from "@styles/mixins";

export const Section = styled.section<HeroSectionProps>`
  height: ${({ viewType }) => (viewType === "other" ? "auto" : "640px")};
  padding-top: 72px;
  padding-bottom: ${({ viewType }) => (viewType === "other" ? "24px" : "0")};

  background: ${({ bgImage, viewType }) => {
    switch (viewType) {
      case "main":
        return `url(${bgImage}), linear-gradient(270deg, #e3e3e3 0.2%, #cbcbcb 99.85%)`;
      case "school":
        return `url(${bgImage}), linear-gradient(90deg, #252525 0.1%, #565656 200%)`;
      case "other":
        return `var(--bg-black)`;
      default:
        return;
    }
  }};

  background-repeat: no-repeat;
  background-position: 50%;
  background-size: auto 820px;

  ${({ viewType }) =>
    viewType === "other"
      ? onDesktop(css`
          padding-top: 80px;
        `)
      : onDesktop(css`
          height: 820px;
          padding-top: 80px;
        `)}
`;

export const Container = styled(motion.div)<HeroSectionProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  overflow: hidden;

  ${({ viewType }) =>
    viewType === "main"
      ? onTablet(css`
          align-items: center;
        `)
      : onTablet(css`
          align-items: flex-start;
        `)}
`;

export const titleStyle = (viewType?: string) => css`
  ${viewType === "other" &&
  css`
    padding-top: 24px;

    ${onDesktop(
      css`
        padding-top: 40px;
      `
    )}
  `}

  font-size: 96px;
  font-weight: 800;
  color: var(--text-white);

  ${onTablet(css`
    font-size: 120px;
  `)}
  ${onDesktop(css`
    font-size: 240px;
  `)}

  ${(viewType === "school" || viewType === "other") &&
  css`
    font-size: 40px;
    font-weight: 900;
    padding-bottom: ${viewType === "school" ? "30px" : "0"};
    color: var(--text-light-grey);

    ${onTablet(css`
      font-size: 88px;
    `)}
    ${onDesktop(css`
      font-size: 160px;
    `)}
  `}
`;

export const paragraphStyle = (pageName?: string) => css`
  font-family: Inter;
  font-size: 18px;
  line-height: 120%;
  color: var(--text-light-grey);

  margin-bottom: ${pageName === "ordered" ? "0" : "16px"};
  padding-top: ${pageName === "ordered" ? "12px" : "0"};

  ${onDesktop(css`
    font-size: 24px;
    margin-bottom: ${pageName} === "ordered"? "0":"20px";
  `)};
`;

export const buttonStyle = css`
  width: 160px;
  height: 40px;
  margin-top: 24px;
  padding: 10px 16px;
  border-radius: 24px;
  border: 1px solid var(--border-light-grey);

  color: var(--text-light-grey);
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  transition: var(--effectDuration);

  ${onTablet(css`
    position: absolute;
    top: 24px;
    right: 40px;
    width: auto;
    margin: 0;
  `)}

  ${onDesktop(
    css`
      top: 40px;
      right: 78px;
      font-size: 14px;
    `
  )}

  &:hover {
    color: var(--btn-show-more-hover);
    border: 1px solid var(--btn-show-more-hover);
    box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
  }
`;
