import HeroSection from "@components/HeroSection/HeroSection";
import bgImage from "../../assets/images/gradient.png";
import CardSliderSection from "@pages/MainPage/CardSliderSection/CardSliderSection";
import { text } from "@constants/answers";
import InfoSection from "./InfoSection/InfoSection";
import PlansSection from "./PlansSection/PlansSection";
import QASection from "./QASection/QASection";
import RegistrationSection from "./RegistrationSection/RegistrationSection";
import { useState } from "react";

const healthyPageProps = {
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

const HealthyPage = () => {
  const [pickedCourse, setPickedCourse] = useState("");

  return (
    <>
      <HeroSection bgImage={bgImage} viewType="school">
        <p>Сильна і міцна нація починається зі здорового способу життя.</p>
        <h1>Оздоровлення</h1>
      </HeroSection>
      <InfoSection />
      <CardSliderSection
        renderArrayText={text}
        stylesProps={healthyPageProps}
      />
      <PlansSection setPickedCourse={setPickedCourse} />
      <QASection />
      <RegistrationSection pickedCourse={pickedCourse} />
    </>
  );
};

export default HealthyPage;
