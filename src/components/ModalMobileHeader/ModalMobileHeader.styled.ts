import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const Wrapper = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  height: calc(100vh - 72px);
  z-index: 200;
  background-color: var(--bg-black);
  pointer-events: auto;
  overflow: auto;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 100;
  pointer-events: auto;
`;

export const Container = styled.div`
  display: flex;
  padding: 24px 20px;
  width: 360px;
  height: 90%;
  margin: 0 auto;
  ${onTablet(css`
    width: 768px;
    gap: 8px;
    padding: 24px 40px;
  `)};
`;

export const NavContainer = styled.div`
  display: flex;
  width: 360px;
  height: 100%;
  flex-direction: column;
  ${onTablet(css`
    width: 340px;
    padding-right: 40px;
  `)};
`;

export const NavWrapper = styled.nav`
  display: flex;
  margin-bottom: auto;
  gap: 12px;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Nav = styled(NavLink)`
  padding: 8px 20px;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 1.6px;
  text-decoration: none;
  transition: var(--effectDuration);
  border: 1px solid var(--bg-light-grey);
  border-radius: 32px;
  background-color: var(--bg-black);

  &:hover {
    color: var(--text-black);
    border: 1px solid var(--bg-light-grey);
    background-color: var(--bg-light-grey);
  }

  &.active {
    color: var(--text-black);
    background-color: var(--bg-light-grey);
    border: 1px solid var(--bg-light-grey);
  }
`;

export const contactContainer = css`
  display: flex;
  flex-direction: column;
`;

export const contactLink = css`
  font-family: Fixel;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  text-transform: uppercase;
  color: var(--text-light-grey);
  margin-bottom: 16px;
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

export const ImageContainer = styled.div`
  display: none;
  ${onTablet(css`
    display: block;
    width: 340px;
    height: 100%;
    padding-left: 40px;
  `)};
`;

export const image = css`
  height: 520px;
`;
