import HeroSection from "@components/HeroSection/HeroSection";
import HistorySection from "./HistorySection/HistorySection";
import AboutSection from "./AboutSection/AboutSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import MyWaySection from "./MyWaySection/MyWaySection";

import bgImage from "@assets/images/frau.webp";
import CardSliderSection from "./CardSliderSection/CardSliderSection";
import { imageArray } from "@constants/imagesArr";

const MainPage = () => {
  const mainPageProps = {
    container: {
      "padding-top": ["24px", "40px"],
      "padding-bottom": ["24px", "40px"],
      width: ["100%"],
      height: ["640px", "900px"],
    },
    display: ["flex", "none", "none"],
    width: ["340px", "728px", "1360px"],
    height: ["524px", "528px", "740px"],
    gap: ["6px", "12px"],
    slidesPerView: [1.06, 1.5, 2.1],
    spaceBetween: [16, 12],
    prevEl: ["#prevBigButton"],
    nextEl: ["#nextBigButton"],
  };
  return (
    <>
      <HeroSection bgImage={bgImage} viewType={"main"} id="section1">
        Frau Laska
      </HeroSection>
      <HistorySection />
      <CardSliderSection
        renderArrayImg={imageArray}
        stylesProps={mainPageProps}
      />
      <AboutSection />
      <ProjectsSection />
      <MyWaySection />
    </>
  );
};

export default MainPage;
