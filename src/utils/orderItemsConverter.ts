import { IAddedToCartProduct } from "Interfaces/IAddedToCartProduct";

export const orderItemsConverter = (addedItems: IAddedToCartProduct[]) => {
  return addedItems.map((item) => {
    const { color, count, product_id, size } = item;

    return {
      color: color ? color : null,
      count,
      product_id,
      size: size ? size : null,
    };
  });
};
