import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop, onTablet } from "@styles/mixins";

export const sectionCart = css`
  padding: 24px 0px;
  width: 100%;
  background: var(--bg-black);
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
  ${onTablet(css`
    width: 312px;
  `)};
`;

export const H2 = styled.h2`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.36px;

  ${onDesktop(css`
    font-size: 24px;
    letter-spacing: 0.48px;
  `)}
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${onDesktop(css`
    flex-direction: unset;
    gap: 20px;
  `)};
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${onTablet(css`
    flex-direction: unset;
    gap: 16px;
  `)};
  ${onDesktop(css`
    width: 844px;
    gap: 20px;
  `)};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${onDesktop(css`
    gap: 20px;
  `)};
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${onDesktop(css`
    gap: 40px;
  `)};
`;
