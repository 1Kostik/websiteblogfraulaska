import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

import {
  box,
  btnWrapper,
  imgThumb,
  linkStyle,
  linkWrapper,
  myWayContenContainer,
  slideStyle,
  swiperContainer,
  textContainer,
  titleContainer,
} from "./ContentBox.styled";

import { ReactComponent as ArrowLeft } from "/src/assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "/src/assets/icons/arrow-right.svg";

import { MyWay, myWayHistoryArr } from "@constants/myWayHistoryArr";
import {
  handleNext,
  handlePrev,
  updateButtonsVisibility,
} from "@utils/swiperUtils";

interface ContentBoxProps {
  children: React.ReactNode;
  photo?: string;
  contentGap?: number | number[];
  isHideMobileImg?: boolean;
  changeDirection?: boolean;
  type?: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  children,
  photo,
  contentGap,
  isHideMobileImg,
  changeDirection,
  type,
}) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [boxHeight, setBoxHeight] = useState<number | undefined>(undefined);

  const boxRef = useRef<HTMLDivElement | null>(null);
  const refPrevBtn = useRef<HTMLButtonElement | null>(null);
  const refNextBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setBoxHeight(boxRef.current?.offsetHeight);
  }, [boxRef]);

  useEffect(() => {
    if (swiper) {
      const handleSlideChange = () =>
        updateButtonsVisibility(swiper, refPrevBtn, refNextBtn);

      swiper.on("slideChange", handleSlideChange);
      updateButtonsVisibility(swiper, refPrevBtn, refNextBtn);

      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, [swiper]);

  return (
    <div css={box(contentGap, changeDirection, type)} ref={boxRef}>
      {(type === "projects" || type === "info") && (
        <div css={textContainer(type)}>
          {typeof children === "string" && <p>{children}</p>}
          {typeof children === "object" && children}
        </div>
      )}
      {type === "myWay" && (
        <div css={myWayContenContainer}>
          <div css={titleContainer}>
            <h2>{children}</h2>
            <div css={btnWrapper}>
              <button onClick={() => handlePrev(swiper!)} ref={refPrevBtn}>
                <ArrowLeft />
              </button>
              <button onClick={() => handleNext(swiper!)} ref={refNextBtn}>
                <ArrowRight />
              </button>
            </div>
          </div>
          <Swiper
            css={swiperContainer}
            slidesPerView={1.088}
            onSwiper={(swiper) => setSwiper(swiper)}
            scrollbar={{ draggable: true }}
            modules={[Navigation]}
            breakpoints={{
              360: { slidesPerView: 1.088, spaceBetween: 16 },
              1440: { slidesPerView: 2, spaceBetween: 20 },
            }}
          >
            {myWayHistoryArr &&
              myWayHistoryArr.map((item: MyWay, i) => (
                <SwiperSlide key={i}>
                  <div css={slideStyle}>
                    <p>{item.year}</p>
                    <p>{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div css={linkWrapper}>
            <Link to="/certificates" css={linkStyle}>
              Сертифікати
            </Link>
          </div>
        </div>
      )}
      <div css={imgThumb(isHideMobileImg, type, photo, boxHeight)} />
    </div>
  );
};

export default ContentBox;
