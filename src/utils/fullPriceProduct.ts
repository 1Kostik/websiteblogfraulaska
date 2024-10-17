import { IAdvert } from "Interfaces/IAdvert";

export const fullPriceProduct = (product: IAdvert) => {
  if (product) {
    const fullPriceVariations = product.variations.map((item) => ({
      ...item,
      price: (Number(item.price) * 100) / (100 - Number(item.discount)),
    }));
    return { ...product, variations: fullPriceVariations };
  }
};
