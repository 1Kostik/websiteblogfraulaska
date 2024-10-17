import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "./CardSlaider.css";

import { LuArrowRight } from "react-icons/lu";
import { LuArrowLeft } from "react-icons/lu";

import {
  ArrowContainer,
  Button,
  Container,
  H2,
  TitleContainer,
  arrowBigLeft,
  arrowBigRight,
  arrowContainer,
  arrowLeft,
  arrowOnImg,
  arrowRight,
  breakpoints,
  btnOnImg,
  swiper,
} from "./CardSlider.styled";

import { ReactComponent as ArrowRight } from "@assets/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "@assets/icons/arrow-left.svg";
import { ReactComponent as ArrowShortLeft } from "@assets/icons/arrow-short-left.svg";
import { ReactComponent as ArrowShortRight } from "@assets/icons/arrow-short-right.svg";

import { CardItem } from "@components/CardItem";

import { StyleProps } from "@pages/MainPage/CardSliderSection/CardSliderSection";
import { Feedback, ImageUrl } from "Interfaces/Product";
import {
  handleNext,
  handlePrev,
  updateButtonsVisibility,
} from "@utils/swiperUtils";
import { handleImgError } from "@utils/handleImgError";

export interface Itext {
  id: number;
  name: string;
  activity: string;
  description: string;
}

interface CardSliderProps {
  renderArrayImg?: ImageUrl[] | null;
  renderArrayText?: Feedback[];
  stylesProps: StyleProps;
}

const CardSlider: React.FC<CardSliderProps> = ({
  renderArrayImg,
  renderArrayText,
  stylesProps,
}) => {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
  const [key, setKey] = useState(0);
  const [hiddenButton, setHiddenButton] = useState(true);

  const refPrevBtn = useRef<HTMLButtonElement | null>(null);
  const refNextBtn = useRef<HTMLButtonElement | null>(null);

  const getVisibleSlides = (width: number) => {
    if (width >= 1440) return 3.5;
    if (width >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      const visibleSlides = getVisibleSlides(screenWidth);

      const shouldHideButtons = !!(
        (renderArrayText && renderArrayText.length <= visibleSlides) ||
        (renderArrayImg && renderArrayImg.length <= visibleSlides)
      );

      setHiddenButton(shouldHideButtons);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [renderArrayImg, renderArrayText]);

  useEffect(() => {
    if (swiperRef && refPrevBtn.current && refNextBtn.current) {
      const handleSlideChange = () =>
        updateButtonsVisibility(swiperRef, refPrevBtn, refNextBtn);

      swiperRef.on("slideChange", handleSlideChange);
      updateButtonsVisibility(swiperRef, refPrevBtn, refNextBtn);

      return () => {
        swiperRef.off("slideChange", handleSlideChange);
      };
    }
  }, [swiperRef, hiddenButton, renderArrayImg]);

  const handleSwiper = (swiper: SwiperCore) => {
    setSwiperRef(swiper);
  };

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [stylesProps]);

  return (
    <Container stylesProps={stylesProps}>
      {(stylesProps.display?.[0] !== "none" ||
        stylesProps.display?.[1] !== "none") && (
        <TitleContainer>
          {stylesProps.display?.[0] !== "none" && (
            <H2>Діяльність у фотографіях</H2>
          )}
          {stylesProps.display?.[1] !== "none" && <H2>Відгуки</H2>}

          {!hiddenButton && (
            <ArrowContainer stylesProps={stylesProps}>
              <Button ref={refPrevBtn} onClick={() => handlePrev(swiperRef!)}>
                {stylesProps.display?.[0] !== "none" && (
                  <ArrowLeft css={arrowBigLeft} />
                )}
                {stylesProps.display?.[1] !== "none" && (
                  <ArrowShortLeft css={arrowLeft} />
                )}
              </Button>
              <Button ref={refNextBtn} onClick={() => handleNext(swiperRef!)}>
                {stylesProps.display?.[0] !== "none" && (
                  <ArrowRight css={arrowBigRight} />
                )}
                {stylesProps.display?.[1] !== "none" && (
                  <ArrowShortRight css={arrowRight} />
                )}
              </Button>
            </ArrowContainer>
          )}
        </TitleContainer>
      )}
      {stylesProps.display?.[2] !== "none" && (
        <div css={arrowContainer(stylesProps)}>
          <button
            css={btnOnImg}
            ref={refPrevBtn}
            onClick={() => handlePrev(swiperRef!)}
          >
            <LuArrowLeft css={arrowOnImg} />
          </button>
          <button
            css={btnOnImg}
            ref={refNextBtn}
            onClick={() => handleNext(swiperRef!)}
          >
            <LuArrowRight css={arrowOnImg} />
          </button>
        </div>
      )}
      <Swiper
        key={key}
        onSwiper={handleSwiper}
        css={swiper(stylesProps)}
        breakpoints={breakpoints(stylesProps)}
        modules={[Navigation]}
      >
        {renderArrayImg
          ? renderArrayImg.length > 0 &&
            renderArrayImg.map((item: ImageUrl, i) => (
              <SwiperSlide className="swiper-slide image-slide" key={i}>
                <img src={item.img_url} alt="" onError={handleImgError} />
              </SwiperSlide>
            ))
          : renderArrayText &&
            renderArrayText.length > 0 &&
            renderArrayText.map((item) => (
              <SwiperSlide className="swiper-slide text-slide" key={item.id}>
                <CardItem text={item} />
              </SwiperSlide>
            ))}
      </Swiper>
    </Container>
  );
};

export default CardSlider;
