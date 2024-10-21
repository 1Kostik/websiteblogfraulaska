import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

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
  changeAnimationDirection?: boolean;
  noAnimation?: boolean;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  children,
  photo,
  contentGap,
  isHideMobileImg,
  changeDirection,
  type,
  changeAnimationDirection,
  noAnimation,
}) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [boxHeight, setBoxHeight] = useState<number | undefined>(undefined);
  const [isInView, setIsInView] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  const boxRef = useRef<HTMLDivElement | null>(null);
  const refPrevBtn = useRef<HTMLButtonElement | null>(null);
  const refNextBtn = useRef<HTMLButtonElement | null>(null);

  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  const calculateCustomOffset = () => {
    const width = window.innerWidth;
    if (width < 768) return 200;
    if (width >= 768 && width < 1440) return 500;
    return 800;
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const variants = {
    hidden: (custom: string) => {
      const customOffset = calculateCustomOffset();
      return !noAnimation
        ? {
            opacity: 0,
            x: custom ? customOffset : -customOffset,
          }
        : {
            opacity: 1,
            x: 0,
          };
    },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, easeInOut } },
  };

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
    <motion.div
      css={box(contentGap, changeDirection, type)}
      ref={boxRef}
      initial={windowWidth && windowWidth < 768 ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      variants={variants}
      custom={changeAnimationDirection}
    >
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
      <motion.div
        css={imgThumb(isHideMobileImg, type, photo, boxHeight)}
        initial={false}
        animate={
          isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        onViewportEnter={() => setIsInView(true)}
        viewport={{ amount: 0.1 }}
      />
    </motion.div>
  );
};

export default ContentBox;
