import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";

import { containerStyles } from "@styles/variables";
import { ReactComponent as BurgerMenu } from "../../assets/icons/menu.svg";
import {
  Section,
  LogoLink,
  LogoIcon,
  Nav,
  Wrapper,
  Links,
  NavWrapper,
  anchorStyles,
  burgerStyles,
  Button,
  WrapperMenu,
} from "./Header.styled";

import ModalMobileHeader from "../ModalMobileHeader/ModalMobileHeader";

const modalPortal = document.querySelector("#portal-root");

const colorsHeader = ["transparent", "var(--bg-light-grey)", "var(--bg-black)"];

const Header = () => {
  const location = useLocation();

  const isAromaSchool = location.pathname === "/aroma-school";
  const isConsultations = location.pathname === "/consultations";
  const isCertificates = location.pathname === "/certificates";
  const isPaymentDelivery = location.pathname === "/payment-delivery";
  const isPrivatePolicy = location.pathname === "/privacy-policy";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sectionColor, setSectionColor] = useState(colorsHeader[0]);

  const handleBurgerMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  const isTrue =
    isConsultations ||
    isAromaSchool ||
    isOpen ||
    isScrolled ||
    isCertificates ||
    isPaymentDelivery ||
    isPrivatePolicy
      ? "true"
      : "false";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section1 = document.getElementById("section1");
      const section2 = document.getElementById("section2");

      if (scrollY === 0 && !isOpen) {
        setSectionColor(colorsHeader[0]);
        setIsScrolled(false);
        return;
      }
      if (
        section1 &&
        scrollY >= section1.offsetTop &&
        scrollY < section1.offsetTop + section1.offsetHeight
      ) {
        setSectionColor(colorsHeader[1]);
        setIsScrolled(false);
      } else if (
        section2 &&
        scrollY >= section2.offsetTop &&
        scrollY < section2.offsetTop + section2.offsetHeight
      ) {
        setSectionColor(colorsHeader[2]);
        setIsScrolled(true);
      } else if (!section1 && scrollY >= 0 && scrollY < window.innerHeight) {
        setSectionColor(colorsHeader[2]);
        setIsScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setSectionColor(colorsHeader[2]);
      document.body.classList.add("no-scroll");
      document.querySelector("#topBtn")?.classList.add("btn-hide");
    } else {
      document.querySelector("#topBtn")?.classList.remove("btn-hide");
      document.body.classList.remove("no-scroll");
      if (!isScrolled) {
        setSectionColor(colorsHeader[0]);
      }
    }
  }, [isOpen, isScrolled]);

  return (
    <Section istrue={isTrue} style={{ backgroundColor: sectionColor }}>
      <div css={containerStyles}>
        <Wrapper>
          <LogoLink to={"/"}>
            <LogoIcon istrue={isTrue} />
          </LogoLink>
          <NavWrapper>
            <Nav
              to={"/consultations"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              istrue={isTrue}
            >
              Консультації
            </Nav>
            <Nav
              to={"/aroma-school"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              istrue={isTrue}
            >
              Школа ароматерапії
            </Nav>
            <a href="#footer" css={anchorStyles(isTrue)}>
              Контакти
            </a>
            <Nav
              to={"/certificates"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              istrue={isTrue}
            >
              Сертифікати
            </Nav>
          </NavWrapper>
          <WrapperMenu>
            <Links
              to={"tg://resolve?domain=dimside29"}
              target="_blank"
              istrue={isTrue}
            >
              Звʼязатись зі мною
            </Links>
            <Button istrue={isTrue} onClick={handleBurgerMenuClick}>
              <BurgerMenu css={burgerStyles(isTrue.toString())} />
            </Button>
            {isOpen &&
              modalPortal &&
              ReactDOM.createPortal(
                <ModalMobileHeader setIsOpen={setIsOpen} />,
                modalPortal
              )}
          </WrapperMenu>
        </Wrapper>
      </div>
    </Section>
  );
};

export default Header;
