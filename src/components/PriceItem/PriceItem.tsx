import React from "react";

import {
  newPriceCartItemCArd,
  oldPriceCartItemCArd,
  oldPriceProductDetails,
  oldPriceStore,
  productDetailsStyle,
  storeStyle,
} from "./PriceItem.styled";

import { fullPrice } from "@utils/fullPrice";

interface IPriceItemProps {
  price: number;
  discount?: number | null;
  style_item?: string;
  total_cost?: number;
}

const PriceItem: React.FC<IPriceItemProps> = ({
  price,
  discount,
  style_item,
  total_cost,
}) => {
  const style_props =
    style_item === "storePage"
      ? storeStyle
      : style_item === "productDetailsPage"
      ? productDetailsStyle
      : style_item === "cartPage"
      ? newPriceCartItemCArd
      : "";
  const old_price =
    style_item === "storePage"
      ? oldPriceStore
      : style_item === "productDetailsPage"
      ? oldPriceProductDetails
      : style_item === "cartPage"
      ? oldPriceCartItemCArd
      : "";
  const switchTitle = style_item === "storePage" ? "грн" : "₴";
  const switchPrice = style_item === "cartPage" ? total_cost : price;
  return (
    <p css={style_props}>
      {discount && (
        <span>
          {" "}
          <span css={old_price}>{fullPrice(price, discount)}</span> -{" "}
        </span>
      )}
      {switchPrice} {switchTitle}
    </p>
  );
};

export default PriceItem;
