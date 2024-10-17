import { CartState } from "./slice";

export const selectCart = (state: { cart: CartState }) => state.cart.cart;
export const selectCartTotalQuantity = (state: { cart: CartState }) =>
  state.cart.cart.reduce((total, item) => total + item.count, 0);
