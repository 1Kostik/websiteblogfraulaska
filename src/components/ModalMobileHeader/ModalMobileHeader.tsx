import React from "react";

import {
  contactContainer,
  contactLink,
  Container,
  SocialContainer,
  SocialLink,
  Overlay,
  Wrapper,
  NavContainer,
  ImageContainer,
  image,
} from "./ModalMobileHeader.styled";
import { Nav, NavWrapper } from "./ModalMobileHeader.styled";

import FrauLaska from "@assets/images/fotoForModal.png";

interface IModalHeader {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMobileHeader: React.FC<IModalHeader> = ({ setIsOpen }) => {
  const handleCloseClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Overlay />
      <Wrapper>
        <Container>
          <NavContainer>
            <NavWrapper>
              <Nav
                to={"/consultations"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={handleCloseClick}
              >
                Консультації
              </Nav>
              <Nav
                to={"/certificates"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={handleCloseClick}
              >
                Сертифікати
              </Nav>
              <Nav
                to={"/aroma-school"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={handleCloseClick}
              >
                Школа ароматерапії
              </Nav>

              <Nav
                to={"/store"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={handleCloseClick}
              >
                Магазин
              </Nav>
            </NavWrapper>
            <div css={contactContainer}>
              <a
                href="tel: +380637053806"
                css={contactLink}
                onClick={handleCloseClick}
              >
                +380637053806
              </a>
              <a
                href="mailto:lana@jar.com"
                css={contactLink}
                onClick={handleCloseClick}
              >
                lana@jar.com
              </a>
              <SocialContainer>
                <SocialLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  onClick={handleCloseClick}
                >
                  Instagram
                </SocialLink>
                <SocialLink
                  href="https://www.facebook.com/"
                  target="_blank"
                  onClick={handleCloseClick}
                >
                  Facebook
                </SocialLink>
                <SocialLink
                  href="https://https://www.tiktok.com/"
                  target="_blank"
                  onClick={handleCloseClick}
                >
                  TikTok
                </SocialLink>
                <SocialLink
                  href="viber://pa?chatURI=dimside"
                  target="_blank"
                  onClick={handleCloseClick}
                >
                  Viber
                </SocialLink>
                <SocialLink
                  href="tg://resolve?domain=dimside29"
                  target="_blank"
                  onClick={handleCloseClick}
                >
                  telegram
                </SocialLink>
              </SocialContainer>
            </div>
          </NavContainer>
          <ImageContainer>
            <img src={FrauLaska} alt="FrauLaska" css={image} />
          </ImageContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default ModalMobileHeader;
