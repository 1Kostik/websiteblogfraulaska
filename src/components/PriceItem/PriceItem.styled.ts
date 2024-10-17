import { css } from "@emotion/react";
import { onDesktop } from "@styles/mixins";

export const storeStyle = css`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;

  ${onDesktop(css`
    line-height: 24px;
    font-size: 20px;
  `)}
`;

export const oldPriceStore = css`
  height: 24px;
  color: var(--text-light-grey);
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-decoration: line-through;

  ${onDesktop(css`
    line-height: 24px;
    font-size: 20px;
  `)}
`;

export const productDetailsStyle = css`
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

export const oldPriceProductDetails = css`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.44px;
  letter-spacing: 1.6px;
  text-decoration: line-through;

  ${onDesktop(css`
    font-size: 32px;
    letter-spacing: 0.64px;
  `)}
`;

export const oldPriceCartItemCArd = css`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 1.6px;
  text-decoration: line-through;

  ${onDesktop(css`
    font-size: 16px;
  `)}
`;

export const newPriceCartItemCArd = css`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 1.6px;

  ${onDesktop(css`
    font-size: 16px;
  `)}
`;
