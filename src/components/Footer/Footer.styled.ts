import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop } from "@styles/mixins";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";

export const StyledLogo = styled(Logo)`
  & path {
    fill: var(--bg-light-grey);
  }
  ${onDesktop(css`
    display: none;
  `)}
`;

export const FooterStyled = styled.footer`
  padding: 32px 0;
  background-color: var(--bg-black);
  ${onDesktop(css`
    padding: 78px 0;
  `)}
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  ${onDesktop(css`
    flex-flow: row-reverse wrap;
    row-gap: 32px;
    column-gap: 40px;
  `)}
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  width: 229px;

  ${onDesktop(css`
    row-gap: 16px;
  `)}
`;

export const navLinkStyle = css`
  padding: 10px 0;
  font-family: Fixel;
  font-size: 12px;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: 1.6px;
  color: var(--text-light-grey);
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid var(--text-light-grey);
  }

  ${onDesktop(css`
    font-size: 16px;
  `)}
`;

export const payContainer = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 8px;
  column-gap: 16px;
  width: 187px;

  ${onDesktop(css`
    position: absolute;
    left: 78px;
    bottom: 48px;
    width: 210px;
  `)}
`;

export const payText = css`
  font-family: Fixel;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: var(--text-light-grey);

  ${onDesktop(css`
    font-size: 18px;
  `)}
`;

export const contactContainer = css`
  display: flex;
  flex-direction: column;

  ${onDesktop(css`
    width: 1015px;
  `)}

  & h2 {
    margin-bottom: 40px;

    font-family: Fixel;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0.64px;
    color: var(--text-light-grey);
  }

  & h2,
  & > a:nth-of-type(1),
  & > a:nth-of-type(2) {
    display: none;
    ${onDesktop(css`
      display: block;
    `)}
  }
`;

export const contactLink = css`
  font-family: Fixel;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  text-transform: uppercase;
  color: var(--text-light-grey);
  margin-bottom: 16px;

  transition: var(--effectDuration);

  &:hover {
    color: var(--btn-show-more-hover);
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 10px 16px 6px;
  border-radius: 100px;
  border: 1px solid var(--text-light-grey);

  font-family: Fixel;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: var(--text-light-grey);

  &:hover {
    border: 1px solid var(--color, #b7b7b7);
    box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
    color: var(--color, #b7b7b7);
  }

  ${onDesktop(css`
    padding: 10px 12px 6px;
    border-radius: 26px;
    font-size: 14px;
    line-height: 20px;
  `)}
`;

export const copyrightContainer = css`
  ${onDesktop(css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 138px;
    width: 100%;
  `)}
`;

export const copyrightStyle = css`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: var(--text-light-grey);
`;
