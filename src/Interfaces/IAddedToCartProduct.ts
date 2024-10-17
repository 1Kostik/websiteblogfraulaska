export interface IAddedToCartProduct {
  product_id: number;
  title: string;
  img: { img_url: string; id: number };
  product_code: number;
  size: number | null | undefined;
  discount: number | null;
  price: number | null;
  count: number;
  color: string | undefined | null;
  total_cost: number;
  quantity: number;
}
