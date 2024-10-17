import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop } from "@styles/mixins";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  height: 451px;
  border: 1px solid var(--bg-light-grey);
  padding: 24px;
  border-radius: 16px;
  overflow: auto;
  white-space: normal;
  word-wrap: break-word;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1; 
    border-radius: 6px;
    margin: 12px
  }

  ${onDesktop(css`
    height: 456px;
  `)}
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;

export const P1 = styled.p`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Arial;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

export const H3 = styled.h3`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 1.6px;
`;

export const P2 = styled.p`
  color: var(--text-light-grey);
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 1px;
`;
