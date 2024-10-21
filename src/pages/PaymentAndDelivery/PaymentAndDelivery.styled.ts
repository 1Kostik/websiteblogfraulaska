import { css } from "@emotion/react";

export const sectionPaymentDelivery = css`
  padding-top: 100px;
  padding-bottom: 40px;
  & h1 {
    font-family: "Fixel";
    font-weight: 600;
    margin: 20px 0 20px 0;
    font-size: 42px;
    color: var(--text-white);
  }
  & h2 {
    letter-spacing: 0.03em;
    font-family: "Fixel";
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 30px;
    color: var(--text-white);
  }
  & h3 {
    font-family: "Inter";
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 25px;
    color: var(--text-white);
  }
  & p {
    letter-spacing: 0.03em;
    font-family: "Inter";
    margin-bottom: 10px;
    font-size: 17px;
    line-height: 25px;
    color: var(--text-light-grey);
  }
  & p:nth-of-type(1),
  p:nth-of-type(3),
  p:nth-of-type(4),
  p:nth-of-type(5),
  p:nth-of-type(8) {
    margin-bottom: 20px;
  }
  & ul {
    margin: 20px 0 20px;
  }
  & li {
    line-height: 25px;
    font-size: 17px;
    color: var(--text-light-grey);
    letter-spacing: 0.2px;
  }
`;
