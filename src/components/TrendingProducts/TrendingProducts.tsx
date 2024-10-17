import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import {
  ProductListContainer,
  Title,
  TitleWrapper,
  arrowContainer,
  arrowLeft,
  arrowRight,
} from "./TrendingProducts.styled";

import { getPopularityProducts } from "@services/servicesApi";

import { IPopularityProducts } from "Interfaces/IPopularityProduct";

import { ReactComponent as ArrowRight } from "@assets/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "@assets/icons/arrow-left.svg";

import ProductCard from "@components/ProductCard/ProductCard";
import {
  handleNext,
  handlePrev,
  updateButtonsVisibility,
} from "@utils/swiperUtils";

const TrendingProducts = () => {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [key, setKey] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
  const [popularProducts, setPopularProducts] = useState<IPopularityProducts[]>(
    []
  );

  const refPrevBtn = useRef<HTMLButtonElement | null>(null);
  const refNextBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, []);

  useEffect(() => {
    if (swiperRef) {
      const handleSlideChange = () =>
        updateButtonsVisibility(swiperRef, refPrevBtn, refNextBtn);

      swiperRef.on("slideChange", handleSlideChange);
      updateButtonsVisibility(swiperRef, refPrevBtn, refNextBtn);

      return () => {
        swiperRef.off("slideChange", handleSlideChange);
      };
    }
  }, [swiperRef, key, popularProducts]);

  useEffect(() => {
    const fetchPopularityProducts = async () => {
      try {
        const data = await getPopularityProducts();
        setPopularProducts(data);
      } catch (error) {
        console.log("error :>> ", error);
      }
    };
    fetchPopularityProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const widthImg: string =
    windowWidth >= 360 && windowWidth < 768
      ? "320px"
      : windowWidth >= 768 && windowWidth < 1440
      ? "336px"
      : windowWidth >= 1440
      ? "306px"
      : "100%";

  const handleSwiper = (swiper: SwiperCore) => {
    setSwiperRef(swiper);
  };

  const handleOnClickCard = (id: number) => {
    navigate(`/store/product/${id}`);
  };

  return (
    <>
      <TitleWrapper>
        <Title>Топ продажів</Title>
        <div css={arrowContainer}>
          <button ref={refPrevBtn} onClick={() => handlePrev(swiperRef!)}>
            <ArrowLeft css={arrowLeft} />
          </button>
          <button ref={refNextBtn} onClick={() => handleNext(swiperRef!)}>
            <ArrowRight css={arrowRight} />
          </button>
        </div>
      </TitleWrapper>
      <ProductListContainer>
        <Swiper
          key={key}
          onSwiper={handleSwiper}
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            360: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2.2, spaceBetween: 10 },
            1440: { slidesPerView: 4.2, spaceBetween: 10 },
          }}
          modules={[Navigation]}
        >
          {popularProducts &&
            popularProducts.map((item: IPopularityProducts) => (
              <SwiperSlide key={item.id}>
                <ProductCard
                  widthContainer={"100%"}
                  key={item.id}
                  handleOnClickCard={handleOnClickCard}
                  width={widthImg}
                  item={item}
                  type="popularity"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </ProductListContainer>
    </>
  );
};

export default TrendingProducts;
