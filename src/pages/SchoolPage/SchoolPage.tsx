import HeroSection from "@components/HeroSection/HeroSection";
import CardSliderSection from "@pages/MainPage/CardSliderSection/CardSliderSection";
import { text } from "@constants/answers";
import About from "./AboutSection/AboutSection";
import QASection from "./QASection/QASection";
import RegistrationSection from "./RegistrationSection/RegistrationSection";
import bgImage from "../../assets/images/gradient.png";

const AromaSchool = () => {
  const AromaSchoolPageProps = {
    container: {
      "padding-top": ["24px", "40px"],
      "padding-bottom": ["24px", "40px"],
      width: ["100%"],
      height: ["563px", "616px"],
    },
    display: ["none", "Flex", "none"],
    width: ["320px", "728px", "1360px"],
    height: ["451px", "451px", "456px"],
    gap: ["6px", "12px"],
    slidesPerView: [1, 2, 3.5],
    spaceBetween: [16, 20],
    prevEl: ["#prevMdButton"],
    nextEl: ["#nextMdButton"],
  };
  return (
    <>
      <HeroSection bgImage={bgImage} viewType="school">
        <p>Сильна і міцна нація починається зі здорового способу життя.</p>
        <h1>Школа ароматерапії</h1>
      </HeroSection>
      <About />
      <CardSliderSection
        renderArrayText={text}
        stylesProps={AromaSchoolPageProps}
      />
      <QASection />
      <RegistrationSection />
    </>
  );
};

export default AromaSchool;
