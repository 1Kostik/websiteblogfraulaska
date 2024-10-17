import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { onDesktop, onTablet } from "@styles/mixins";

import checkboxChecked from "@assets/images/checkbox-active.png";

export const PaymentContainer = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 320px;
  border-radius: 16px;
  border: 1px solid var(--bg-light-grey);
  background: var(--bg-light-grey);
  padding: 16px;

  ${onTablet(css`
    width: 688px;
  `)};

  ${onDesktop(css`
    width: 420px;
  `)};
`;

export const InfoPaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;
`;

export const TitlePayment = styled.h2`
  width: 100%;
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.36px;
  margin-bottom: 24px;

  ${onDesktop(css`
    font-size: 24px;
    letter-spacing: 0.48px;
  `)};
`;

export const TitleInfo = styled.span`
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;

  ${onDesktop(css`
    font-size: 14px;
  `)};
`;

export const InfoPrice = styled.span`
  color: var(--bg-black);
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;

  ${onDesktop(css`
    font-size: 14px;
  `)};
`;

export const Line = styled.p`
  content: "";
  width: 100%;
  height: 1px;
  background-color: var(--bg-black);
  margin-bottom: 24px;
`;

export const InfoWrapperPayment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const WrapperTitle = styled.h2`
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;

  ${onDesktop(css`
    font-size: 18px;
  `)};
`;

export const EndPrice = styled.span`
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;

  ${onDesktop(css`
    font-size: 18px;
  `)};
`;

export const Button = styled.button`
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  padding: 10px 16px;
  border-radius: 24px;
  border: 1px solid var(--bg-black);

  ${onDesktop(css`
    font-size: 14px;
  `)};
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  & label {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: var(--bg-black);
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.25px;
    ${onDesktop(css`
      font-size: 14px;
    `)};

    &::before {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      margin-right: 10px;
    }
  }

  & input:checked + label::before {
    background: url(${checkboxChecked});
    background-position: center;
    background-color: black;
  }
`;
