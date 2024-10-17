import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop, onTablet } from "@styles/mixins";

interface PropsProdDet {
  isErrorMessage?: boolean;
  isOptions?: boolean;
}

export const Section = styled.section`
  padding-top: 80px;
`;
export const Container = styled.div`
  padding: 24px 0px 24px 0px;
  ${onDesktop(css`
    padding: 40px 0px 40px 0px;
  `)}
`;
export const H2 = styled.h2`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  ${onDesktop(css`
    font-size: 14px;
  `)}
`;

export const titleH2 = css`
  color: var(--text-active-link-milk);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-decoration: underline;
  ${onDesktop(css`
    font-size: 14px;
  `)}
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 320px;
  ${onTablet(css`
    width: 332px;
    height: 332px;
  `)}
  ${onDesktop(css`
    width: 626px;
    height: 100%;
  `)}
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  gap: 4px;
  margin-bottom: 12px;
`;

export const ButtonBack = styled.button`
  width: 40px;
  height: 40px;
  padding: 10px;
`;

export const svgArrowBack = css`
  width: 20px;
  height: 20px;
  color: var(--bg-light-grey);
`;

export const svgArrowRight = css`
  width: 16px;
  height: 16px;
  color: var(--bg-light-grey);
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  ${onTablet(css`
    flex-direction: unset;
    height: 398px;
  `)};
  ${onDesktop(css`
    height: 626px;
    gap: 32px;
  `)};
`;

export const TextContainer = styled.div`
  ${onTablet(css`
    width: 332px;
    height: 100%;
  `)}
  ${onDesktop(css`
    width: 626px;
    height: 100%;
  `)}
`;

export const H3 = styled.h3`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.44px;
  width: 201px;
  ${onTablet(css`
    width: 213px;
  `)}
  ${onDesktop(css`
    width: 495px;
    font-size: 32px;
    letter-spacing: 0.64px;
  `)}
`;

export const P = styled.p`
  width: auto;
  color: var(--text-black);
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;
  display: flex;
  padding: 2px 8px;
  border-radius: 12px;
  background: var(--bg-light-grey);
  ${onDesktop(css`
    width: auto;
    font-size: 14px;
  `)}
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  gap: 24px;
  margin-bottom: 12px;
  ${onDesktop(css`
    height: 32px;
  `)}
`;

export const P1 = styled.p`
  color: var(--text-light-grey);
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  margin-bottom: 12px;
`;

export const P2 = styled.p`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.44px;
  margin-bottom: 24px;
  ${onDesktop(css`
    font-size: 32px;
    letter-spacing: 0.64px;
  `)}
`;

export const P3 = styled.p`
  color: var(--text-light-grey);
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 32px;
  ${onDesktop(css`
    white-space: unset;
    padding-right: 6px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: 14px;
    -webkit-line-clamp: 3;
  `)}
`;

export const ColorContainer = styled.div<PropsProdDet>`
  position: relative;
  border: ${({ isErrorMessage }) =>
    isErrorMessage ? "1px solid red" : "none"};
  border-radius: ${({ isErrorMessage }) => (isErrorMessage ? "12px" : "none")};
  padding: ${({ isErrorMessage }) => (isErrorMessage ? "5px 10px" : "none")};

  display: flex;
  width: 100%;
  gap: 24px;
  margin-bottom: ${({ isErrorMessage, isOptions }) =>
    isErrorMessage ? "17px" : isOptions ? "12px" : "30px"};
  ${onDesktop(css`
    height: 40px;
  `)}
`;
export const H4 = styled.h4`
  width: 80px;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  ${onDesktop(css`
    font-size: 14px;
  `)}
`;

export const Ul = styled.ul`
  width: 216px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  height: 100%;
  align-items: center;
  ${onTablet(css`
    width: 228px;
  `)}
  ${onDesktop(css`
    width: 522px;
    flex-wrap: unset;
  `)}
`;

export const Li = styled.li`
  position: relative;
  width: 20px;
  height: 20px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  gap: 24px;
  margin-bottom: 32px;
  align-items: center;
`;
export const Button = styled.button`
  color: var(--text-black);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  border-radius: 24px;
  background: var(--bg-light-grey);
  padding: 10px 16px;
  gap: 8px;
  ${onDesktop(css`
    font-size: 14px;
  `)}
`;

export const SelectWrapper = styled.div`
  width: 216px;
  ${onTablet(css`
    width: 228px;
  `)}
  ${onDesktop(css`
    width: 522px;
  `)}
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
export const Description = styled.p`
  color: var(--text-light-grey);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  ${onTablet(css`
    width: 336px;
  `)}
  ${onDesktop(css`
    width: 632px;
    font-size: 24px;
  `)}
`;
export const DescriptionContainer = styled.div`
  padding: 24px 0 24px 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  ${onTablet(css`
    flex-direction: unset;
    gap: 16px;
  `)}
  ${onDesktop(css`
    padding: 40px 0 40px 0;
    gap: 20px;
  `)}
`;

export const DeliveryInfoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 92px;
  border: 1px solid var(--bg-light-grey);
  padding: 12px 20px;
  border-radius: 8px;
  background: var(--bg-light-grey);
  ${onTablet(css`
    width: 336px;
    height: 140px;
  `)}
  ${onDesktop(css`
    padding: 16px 24px;
    width: 632px;
    height: 56px;
    border-radius: 16px;
  `)}
`;
export const Span = styled.span`
  color: var(--text-black);
  font-family: Fixel;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.25px;
  ${onDesktop(css`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1px;
  `)}
  &:nth-of-type(2) {
    position: absolute;
    bottom: 12px;
    left: 21px;
    color: var(--text-black);
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    ${onDesktop(css`
      position: relative;
      bottom: 0;
      left: 0;
      font-size: 14px;
      letter-spacing: 0.25px;
    `)}
  }
  &:nth-of-type(3) {
    color: var(--text-black);
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    ${onDesktop(css`
      font-size: 14px;
      letter-spacing: 0.25px;
    `)}
  }
`;

export const ContainerTopSeller = styled.div`
  width: 100%;

  padding: 24px 0px;
  height: 511px;
  ${onTablet(css`
    width: 100%;
  `)}
  ${onDesktop(css`
    padding: 40px 0px;
    width: 100%;
    height: 556px;
  `)}
`;
export const BackStore = styled.button`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  padding: 10px 16px;
  border-radius: 24px;
  border: 1px solid var(--bg-light-grey);
`;

export const checkedColor = css`
  position: absolute;
  border-radius: 50%;
  border: 2px solid white;
  height: 30px;
  width: 30px;
  top: -5px;
  left: -5px;
`;
