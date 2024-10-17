import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop, onTablet } from "@styles/mixins";

interface Props {
  isOpen?: boolean;
  isChange?: boolean;
  isOpenSearch?: boolean;
  padding?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  widthTagP?: string;
  height?: string;
  disableWidth?: string;
  justifyContent?: string;
  backGround?: string;
  color?: string;
  fontSize?: string;
  top?: string;
  gap?: string;
  widthContainer?: string;
}

interface Ih4 {
  isNone?: boolean;
}

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
`;

export const H4 = styled.h4<Ih4>`
  display: ${({ isNone }) => (isNone ? "none" : "")};
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

export const SelectContainer = styled.div<Props>`
  position: relative;
  height: ${({ height }) => (height ? height : "40px")};
  width: ${({ widthContainer }) => (widthContainer ? widthContainer : "100%")};
`;

export const SelectOptionContainer = styled.ul<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: ${({ top }) => (top ? top : "44px")};
  right: 0px;
  width: ${({ width }) => (width ? width : "100%")};
  height: auto;
  border: ${({ border }) => (border ? border : "1px solid #d7d7d7")};
  border-radius: 12px;
  padding: 8px;
  background: ${({ backGround }) =>
    backGround ? backGround : "var(--bg-black)"};
  z-index: 100;
  transition: var(--effectDuration);
`;

export const SelectOption = styled.li<Props>`
  width: 204px;
  color: ${({ color }) => (color ? color : "var(--text-light-grey)")};
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  cursor: pointer;
`;

export const SelectTitleContainer = styled.div<Props>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => (padding ? padding : "8px 17px 8px 17px")};
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "24px"};
  gap: 6px;
  border: ${({ border }) => (border ? border : "1px solid #d7d7d7")};
  background: ${({ isOpen, backGround }) =>
    isOpen
      ? "var(--bg-light-grey)"
      : backGround
      ? backGround
      : "var(--bg-black)"};
`;

export const P = styled.p<Props>`
  width: ${({ disableWidth, isOpenSearch, widthTagP }) =>
    disableWidth
      ? disableWidth
      : isOpenSearch
      ? "14px"
      : widthTagP
      ? widthTagP
      : "100%"};
  max-width: ${({ widthTagP }) => (widthTagP ? widthTagP : "180px")};
  color: ${({ isOpen, color }) =>
    isOpen ? "var(--text-black)" : color ? color : "var(--text-light-grey)"};
  text-align: right;
  font-family: Fixel;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ disableWidth, isChange }) =>
    onTablet(css`
      width: ${disableWidth ? disableWidth : isChange ? "38px" : "100%"};
      max-width: unset;
    `)};
  ${({ disableWidth, widthTagP, fontSize }) =>
    onDesktop(css`
      width: ${disableWidth ? disableWidth : widthTagP ? widthTagP : "100%"};
      font-size: ${fontSize ? fontSize : "14px"};
    `)}
`;

export const svgCheckedStyles = (color: string | undefined) => css`
  & path {
    fill: ${color ? color : "var(--bg-light-grey)"};
  }
`;

export const SelectOne = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : "14px")};
  width: 242px;
  height: 24px;
`;

export const SvgContainer = styled.div`
  width: 24px;
  height: 24px;
`;

export const svgArrowUp = (color: string | undefined) => css`
  & path {
    fill: ${color ? color : "var(--bg-black)"};
  }
`;

export const svgArrowDpwn = (color: string | undefined) => css`
  & path {
    fill: ${color ? color : "var(--bg-light-grey)"};
  }
`;
