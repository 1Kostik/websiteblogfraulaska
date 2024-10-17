import React from "react";
import { useSelector } from "react-redux";

import {
  Container,
  ImageContainer,
  InfoContainer,
  H5,
} from "./ProductCard.styled";

import ProductInterface from "@components/ProductInterface";
import PriceItem from "@components/PriceItem/PriceItem";

import { handleImgError } from "@utils/handleImgError";

import { Product } from "Interfaces/Product";
import { IPopularityProducts } from "Interfaces/IPopularityProduct";

import { selectToken } from "@redux/auth/selectors";

interface Props {
  show?: boolean;
  handleOnClickCard?: (id: number) => void;
  item: Product | IPopularityProducts;
  width?: string;
  setIsAdvertDeleted?: React.Dispatch<React.SetStateAction<boolean>>;
  type?: string;
  widthContainer?: string;
}

const ProductCard: React.FC<Props> = ({
  show,
  handleOnClickCard,
  item,
  width,
  setIsAdvertDeleted,
  type,
  widthContainer,
}) => {
  const { id, title } = item;
  const token = useSelector(selectToken);
  
  const firstImageUrl =
    "imageUrls" in item && item.imageUrls.length > 0
      ? item.imageUrls[0].img_url
      : "image_url" in item
      ? item.image_url
      : "";
  const price =
    "variations" in item && item.variations.length > 0
      ? item.variations[0].price
      : "price" in item
      ? item.price
      : 0;

  const discount =
    "variations" in item && item.variations.length > 0
      ? item.variations[0].discount
      : null;
  return (
    <Container
      widthContainer={widthContainer}
      show={show}
      onClick={() =>
        id !== undefined && handleOnClickCard && handleOnClickCard(id)
      }
    >
      <div>
        <ImageContainer>
          <img
            src={firstImageUrl}
            alt=""
            style={{ width: `${width}` }}
            onError={handleImgError}
          />
          {type !== "popularity" && token && (
            <ProductInterface
              productId={id}
              title={title}
              setIsAdvertDeleted={setIsAdvertDeleted}
            />
          )}
        </ImageContainer>
        <InfoContainer>
          <H5>{title}</H5>
          <PriceItem
            price={Number(price)}
            discount={discount}
            style_item={"storePage"}
          />
        </InfoContainer>
      </div>
    </Container>
  );
};

export default ProductCard;
