import { css } from "@emotion/react";

export const sectionSyles = css`
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
  & p {
    letter-spacing: 0.03em;
    font-family: "Inter";
    margin-bottom: 10px;
    font-size: 17px;
    line-height: 25px;
    color: var(--text-light-grey);
  }
  & p:nth-of-type(2),
  p:nth-of-type(5) {
    margin-bottom: 20px;
  }
  & ul {
    margin-bottom: 20px;
  }
  & li {
    letter-spacing: 0.03em;
    font-family: "Inter";
    line-height: 25px;
    font-size: 17px;
    color: var(--text-light-grey);
  }
`;
