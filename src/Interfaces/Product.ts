export interface Product {
  id: number;
  category_id: number;
  title: string;
  imageUrls: ImageUrl[];
  main_image: string;
  description: string;
  ranking: number;
  benefit: string;
  popularity: number;
  product_code: number;
  composition: string;
  variations: Variation[];
  feedbacks: Feedback[];
}
export interface Variation {
  id: number;
  price: number;
  discount: number | null;
  count: number;
  size: number | null;
  color: string | null;
}

export interface Feedback {
  id: number;
  name: string;
  profession: string;
  review: string;
}

export interface ImageUrl {
  id: number;
  img_url: string;
}
