export interface IOrderCreationItem {
  product_id: number;
  count: number;
  color: string | undefined | null;
  size: number | null | undefined;
}

export interface IOrderCreation {
  delivery_type: string;
  email: string;
  last_name: string;
  name: string;
  order_items: IOrderCreationItem[];
  payment_method: string;
  phone: string;
  delivery_city: string;
  delivery_destination: string;
  recipient_name: string;
  recipient_last_name: string;
  recipient_phone: string;
  call_me_back: boolean;
}
