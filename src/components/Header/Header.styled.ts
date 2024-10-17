import { Link, NavLink } from "react-router-dom";
import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { onDesktop, onTablet } from "@styles/mixins";

interface SectionProps {
  istrue?: string;
}

const combineStyles = (
  styles1: SerializedStyles,
  styles2: SerializedStyles
) => css`
  ${styles1};
  ${styles2};
`;

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const burgerMenuStyles = css`
  border-radius: 50%;
  transition: var(--effectDuration);
  cursor: pointer;

  & path {
    fill: var(--bg-black);
  }

  &:hover {
    & path {
      fill: var(--fill-cart-hover);
    }
  }

  &:active {
    & path {
      fill: var(--bg-black);
    }
  }

  ${onDesktop(css`
    display: none;
  `)};
`;

export const Button = styled.button<SectionProps>`
  z-index: 10;
  padding: 8px;
  border-radius: 50%;
  background-color: inherit;
  transition: var(--effectDuration);

  &:hover {
    ${burgerMenuStyles}:hover {
      & path {
        fill: var(--fill-cart-hover);
      }
    }
  }

  &:active {
    background-color: ${({ istrue }) =>
      istrue === "true" ? "var(--bg-light-grey)" : "var(--bg-black)"};
    ${burgerMenuStyles}:active {
      & path {
        fill: ${({ istrue }) =>
          istrue === "true" ? "var(--bg-black)" : "var(--bg-light-grey)"};
      }
    }
  }

  ${onDesktop(css`
    display: none;
  `)};
`;

export const burgerStyles = (istrue: string) => css`
  ${combineStyles(
    burgerMenuStyles,
    css`
      &:active {
        background-color: ${istrue === "true"
          ? "var(--bg-light-grey)"
          : "var(--bg-black)"};
      }

      path {
        fill: ${istrue === "true" ? "var(--bg-light-grey)" : "var(--bg-black)"};
      }
    `
  )}
`;

export const Section = styled.header<SectionProps>`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 72px;
  padding: 16px 0;
  background-color: ${({ istrue }) =>
    istrue === "true" ? "var(--bg-black)" : "var(--bg-main-page)"};
  ${onDesktop(css`
    height: 80px;
    padding: 20px 0;
  `)};
`;

export const LogoIcon = styled(Logo)<SectionProps>`
  width: 49.5px;
  height: 40px;
  transition: var(--effectDuration);
  cursor: pointer;

  & path {
    fill: ${({ istrue }) =>
      istrue === "true" ? "var(--text-light-grey)" : "var(--text-black)"};
  }

  &:hover {
    & path {
      fill: var(--text-active-link-milk);
    }
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  ${onDesktop(css`
    height: 40px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-grow: 1;
  `)}
`;

export const Nav = styled(NavLink)<SectionProps>`
  display: none;
  ${({ istrue }) =>
    onDesktop(css`
      display: block;
      padding: 8px 16px;
      color: ${istrue === "true"
        ? "var(--text-light-grey)"
        : "var(--text-black)"};
      font-family: Fixel;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 133.333% */
      letter-spacing: 0.15px;
      text-decoration: none;
      transition: var(--effectDuration);
      &:hover {
        color: var(--text-active-link-milk);
        border-bottom: 3px solid var(--bg-light-grey);
      }
      &.active {
        color: var(--text-active-link-milk);
        border-bottom: 2px solid var(--bg-light-grey);
      }
    `)}
`;

export const Links = styled(Link)<SectionProps>`
  display: none;
  ${({ istrue }) =>
    onDesktop(css`
      display: block;
      width: 222px;
      padding: 6px 24px;
      text-decoration: none;
      border-radius: 100px;
      border: 1px solid var(--bg-black);
      background: ${istrue === "true"
        ? "var(--bg-light-grey)"
        : "var(--bg-black)"};
      color: ${istrue === "true"
        ? "var(--text-black)"
        : "var(--text-light-grey)"};
      font-family: Fixel;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 23px;
      letter-spacing: 0.15px;
      transition: var(--effectDuration);
      &:hover {
        color: ${istrue === "true"
          ? "var( --text-light-grey)"
          : "var(--text-black)"};
        border: 1px solid
          ${istrue === "true" ? "var(--bg-light-grey)" : "var(--bg-black)"};
        background: ${istrue === "true"
          ? "var(--bg-black)"
          : "var(--bg-light-grey)"};
      }
    `)}
`;

export const Wrapper = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${onTablet(css`
    width: 688px;
    height: 40px;
    gap: 8px;
  `)}

  ${onDesktop(css`
    justify-content: unset;
    width: 1284px;
    height: 40px;
    gap: 8px;
  `)}
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const cartStyles = css`
  border-radius: 50%;
  transition: var(--effectDuration);
  cursor: pointer;

  & path {
    fill: var(--bg-black);
  }

  &:hover {
    & path {
      fill: var(--fill-cart-hover);
    }
  }

  &:active {
    & path {
      fill: var(--bg-black);
    }
  }
`;

export const Cart = styled(Link)<SectionProps>`
  position: relative;
  padding: 8px;
  border-radius: 50%;
  text-decoration: none;
  transition: var(--effectDuration);

  &:hover {
    ${cartStyles}:hover {
      & path {
        fill: var(--fill-cart-hover);
      }
    }
  }

  &:active {
    background-color: ${({ istrue }) =>
      istrue === "true" ? "var(--bg-light-grey)" : "var(--bg-black)"};
    ${cartStyles}:active {
      & path {
        fill: ${({ istrue }) =>
          istrue === "true" ? "var(--bg-black)" : "var(--bg-light-grey)"};
      }
    }
  }
`;

export const cartStylesWithColor = (istrue: string) => css`
  ${cartStyles};

  &:active {
    background-color: ${istrue === "true"
      ? "var(--bg-light-grey)"
      : "var(--bg-black)"};
    & path {
      fill: ${istrue === "true" ? "var(--bg-black)" : "var(--bg-light-grey)"};
    }
  }

  path {
    fill: ${istrue === "true" ? "var(--bg-light-grey)" : "var(--bg-black)"};
  }
`;

export const anchorStyles = (istrue: string) => css`
  display: none;
  ${onDesktop(css`
    display: block;
    padding: 8px 16px;
    color: ${istrue === "true"
      ? "var(--text-light-grey)"
      : "var(--text-black)"};
    font-family: Fixel;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.15px;
    text-decoration: none;
    transition: var(--effectDuration);

    &:hover {
      color: var(--text-active-link-milk);
      border-bottom: 2px solid var(--bg-light-grey);
    }

    &.active {
      color: var(--text-active-link-milk);
      border-bottom: 2px solid var(--bg-light-grey);
    }
  `)}
`;
export const cartCount = (istrue: string) => css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 24px;
  width: 20px;
  height: 20px;
  padding: 4px;
  background-color: ${istrue === "true"
    ? "var(--bg-light-grey)"
    : "var(--bg-black)"};
  border-radius: 50%;
  color: ${istrue === "true" ? "var(--text-black)" : "var(--text-light-grey)"};
  font-size: 12px;
  font-weight: 600;
`;

export const addProductStyle = (isTrue: string) =>
  css`
    position: relative;
    display: flex;
    align-items: center;
    width: 175px;
    padding: 8px 16px;
    color: ${isTrue === "true"
      ? "var(--text-light-grey)"
      : "var(--text-black)"};
    font-family: Fixel;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.15px;
    transition: var(--effectDuration);

    ${onTablet(css`
      margin-left: 350px;
      font-size: 18px;
    `)}

    ${onDesktop(css`
      margin-left: 0;
    `)}

    &:hover::after {
      content: "";
      display: block;
      position: absolute;
      top: 38px;
      width: 143px;
      height: 1px;
      background-color: var(--bg-light-grey);
    }

    &:hover {
      color: var(--text-active-link-milk);
    }

    & svg {
      margin-right: 6px;
    }
  `;

export const btnLogOut = (isTrue: string) => css`
  width: 20px;

  & svg {
    font-size: 20px;
    transition: var(--effectDuration);
  }
  color: ${isTrue === "true" ? "var(--text-light-grey)" : "var(--text-black)"};

  &:hover {
    & svg {
      color: var(--text-active-link-milk);
      transform: scale(1.1);
    }
  }
`;
