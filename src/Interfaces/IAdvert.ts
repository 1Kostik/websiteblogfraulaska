export interface IAdvert {
  id?: number;
  category_id: number | string;
  imageUrls: (File | IImageUrl)[];
  main_image: string;

  title: string;
  product_code: string | number;
  composition: string;
  benefit: string;
  description: string;

  variations: IVariation[];

  feedbacks: IFeedback[];

  popularity: string | number;
  ranking: string | number;

  newCategory?: string;
}

export interface IVariation {
  id?: number;
  size: number | string;
  price: number | string;
  count: number | string;
  color: string;
  discount: number | string;
}

export interface IFeedback {
  id?: number;
  name: string;
  profession: string;
  review: string;
}

export interface IImageUrl {
  id?: number;
  img_url: string | File;
}
