import { Link } from "react-router-dom";

import { containerStyles } from "@styles/variables";
import {
  Container,
  FooterStyled,
  Nav,
  SocialLink,
  SocialContainer,
  copyrightStyle,
  navLinkStyle,
  payContainer,
  payText,
  contactContainer,
  contactLink,
  copyrightContainer,
  StyledLogo,
} from "./Footer.styled";

import { ReactComponent as VisaIcon } from "/src/assets/icons/visa.svg";
import { ReactComponent as MCIcon } from "/src/assets/icons/master_card.svg";

const Footer = () => {
  return (
    <FooterStyled id="footer">
      <Container css={containerStyles}>
        <StyledLogo />
        <Nav>
          <Link to="/consultations" css={navLinkStyle}>
            Консультації
          </Link>
          <Link to="/aroma-school" css={navLinkStyle}>
            Школа ароматерапії
          </Link>
          <Link to="/store" css={navLinkStyle}>
            Магазин
          </Link>
          <Link to="/cart" css={navLinkStyle}>
            Доставка та оплата
          </Link>
          <p css={navLinkStyle}>Privacy Policy</p>
        </Nav>
        <div css={payContainer}>
          <p css={payText}>Приймаємо до оплати:</p>
          <VisaIcon />
          <MCIcon />
        </div>
        <div css={contactContainer}>
          <h2>Як зі мною звʼязатись?</h2>
          <a href="tel: +380637053806" css={contactLink}>
            +380637053806
          </a>
          <a href="mailto:lana@jar.com" css={contactLink}>
            lana@jar.com
          </a>
          <SocialContainer>
            <SocialLink href="https://www.instagram.com/" target="_blank">
              Instagram
            </SocialLink>
            <SocialLink href="https://www.facebook.com/" target="_blank">
              Facebook
            </SocialLink>
            <SocialLink href="https://https://www.tiktok.com/" target="_blank">
              TikTok
            </SocialLink>
            <SocialLink href="viber://pa?chatURI=dimside" target="_blank">
              Viber
            </SocialLink>
            <SocialLink href="tg://resolve?domain=dimside29" target="_blank">
              telegram
            </SocialLink>
          </SocialContainer>
        </div>
        <div css={copyrightContainer}>
          <p css={copyrightStyle}>
            Copyright © 2023 Перуниця Всі права захищені
          </p>
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;