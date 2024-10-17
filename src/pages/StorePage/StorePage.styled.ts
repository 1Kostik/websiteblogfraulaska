import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop, onTablet } from "@styles/mixins";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;  
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
  background: var(--bg-black);
  ${onDesktop(css`
    border: 1px solid var(--bg-light-grey);
    border-radius: 24px;
    transition: var(--effectDuration);
    gap: 8px;
    padding: 10px 16px;
    &:hover {
      background-color: var(--bg-light-grey);
      & p {
        color: var(--text-black);
      }
      & path {
        fill: var(--bg-black);
      }
    }
  `)};
`;
export const Section = styled.section`
  padding: 0px 0px 24px 0px;
  background: var(--bg-black);
  ${onTablet(css`
    padding: 0px 0px 24px 0px;
  `)}
  ${onDesktop(css`
    padding: 0px 0px 40px 0px;
  `)}
`;
export const MaineContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  ${onTablet(css`
    gap: 20px;
  `)}
  ${onDesktop(css`
    gap: 24px;
  `)}
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  ${onTablet(css`
    justify-content: space-between;
    gap: 12px;
  `)};
  ${onDesktop(css`
    gap: 24px;
  `)}
`;
export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${onTablet(css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: unset;
    width: 100%;
    gap: 20px;
  `)}
  ${onDesktop(css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `)}
`;
export const P = styled.p`
  display: none;
  ${onDesktop(css`
    display: block;
    color: var(--text-light-grey);
    font-family: Fixel;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
  `)}
`;

export const svgFilterSm = css`
  width: 20px;
  height: 20px;
`;
