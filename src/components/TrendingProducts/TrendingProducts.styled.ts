import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop, onTablet } from "@styles/mixins";

export const ProductListContainer = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  ${onTablet(css`
    display: flex;
    width: 100%;
    gap: 20px;
  `)}

  ${onDesktop(css`
    width: 100%;
    display: flex;
  `)}
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 41px;
  ${onDesktop(css`
    margin-bottom: 36px;
  `)};
`;

export const arrowContainer = () => css`
  display: flex;
  width: 197px;
  height: 40px;
  justify-content: space-between;
`;

export const arrowLeft = css`
  & path {
    fill: var(--bg-light-grey);
  }
`;

export const arrowRight = css`
  & path {
    fill: var(--bg-light-grey);
  }
`;

export const Title = styled.h4`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.44px;

  ${onTablet(css`
    width: 336px;
  `)}

  ${onDesktop(css`
    width: 632px;
    font-size: 32px;
    letter-spacing: 0.64px;
  `)}
`;
