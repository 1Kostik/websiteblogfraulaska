import { IFilterProducts } from "./IFilterProducts";

export interface CategoriesProductCount {
    id: number;
    product_count: number;
    products: IFilterProducts[];
    title: string;
  }