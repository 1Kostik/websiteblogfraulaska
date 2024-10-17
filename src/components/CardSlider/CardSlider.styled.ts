import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyleProps } from "@pages/MainPage/CardSliderSection/CardSliderSection";
import { onDesktop, onTablet } from "@styles/mixins";

interface Props {
  stylesProps: StyleProps;
}

export const swiper = (stylesProps: StyleProps) => css`
  width: ${stylesProps.width?.[0]};
  height: ${stylesProps.height?.[0]};

  img {
    object-fit: cover;
  }

  ${onTablet(css`
    width: ${stylesProps.width?.[1]};
    height: ${stylesProps.height?.[1]};
  `)}

  ${onDesktop(css`
    width: ${stylesProps.width?.[2]};
    height: ${stylesProps.height?.[2]};
  `)}
`;

export const reviews = css`
  width: 343px;
  height: 456px;

  img {
    object-fit: cover;
  }

  ${onTablet(css`
    width: 728px;
    height: 456px;
  `)}

  ${onDesktop(css`
    width: 1360px;
    height: 456px;
  `)}
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  height: 40px;
  align-items: center;
  justify-content: space-between;

  ${onDesktop(css`
    margin-bottom: 40px;
  `)}
`;

export const Container = styled.div<Props>`
  position: relative;

  ${({ stylesProps }) => css`
    width: ${stylesProps.container?.width[0]};
    padding-top: ${stylesProps.container?.["padding-top"][0]};
    padding-bottom: ${stylesProps.container?.["padding-bottom"][0]};
    height: ${stylesProps.container?.height[0]};
    ${onDesktop(css`
      padding-top: ${stylesProps.container?.["padding-top"]?.[1]};
      padding-bottom: ${stylesProps.container?.["padding-bottom"]?.[1]};
      height: ${stylesProps.container?.height[1]};
    `)};
  `}
`;

export const arrowLeft = css`
  & path {
    fill: var(--bg-light-grey);
  }
`;

export const arrowRight = css`
  & path {
    fill: var(--bg-light-grey);
  }
`;

export const arrowBigLeft = css`
  & path {
    fill: var(--bg-light-grey);
  }
`;

export const arrowBigRight = css`
  & path {
    fill: var(--bg-light-grey);
  }
`;

export const ArrowContainer = styled.div<Props>`
  ${({ stylesProps }) => css`
    display: flex;
    gap: ${stylesProps.gap?.[0]};

    ${onTablet(css`
      gap: ${stylesProps.gap?.[1]};
    `)};
  `}
`;

export const Button = styled.button`
  background: transparent;
`;

export const H2 = styled.h2`
  color: var(--text-light-grey);
  font-size: 22px;
  font-family: Fixel;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.44px;

  ${onDesktop(css`
    font-size: 32px;
  `)}
`;

export const arrowContainer = (stylesProps: StyleProps) => css`
  display: ${stylesProps.display?.[2]};
  position: absolute;
  width: 100%;
  height: 40px;

  justify-content: space-between;
  padding: 0 12px;
  top: 140px;
  z-index: 50;

  ${onTablet(css`
    top: 146px;
  `)};

  ${onDesktop(css`
    top: 293px;
  `)};
`;

export const btnOnImg = css`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 12px;
  background: var(--bg-tranparent);
`;

export const arrowOnImg = css`
  width: 20px;
  height: 20px;
  color: var(--bg-black);
`;

export const breakpoints = (stylesProps: StyleProps) => {
  return {
    360: {
      slidesPerView: stylesProps.slidesPerView?.[0],
      spaceBetween: stylesProps.spaceBetween?.[0],
    },
    768: {
      slidesPerView: stylesProps.slidesPerView?.[1],
      spaceBetween: stylesProps.spaceBetween?.[0],
    },
    1440: {
      slidesPerView: stylesProps.slidesPerView?.[2],
      spaceBetween: stylesProps.spaceBetween?.[1],
    },
  };
};
