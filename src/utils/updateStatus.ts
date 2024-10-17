import { updateOrder } from "@services/servicesApi";

export const updateStatus = async (orderId: number, status: string) => {
  await updateOrder(orderId, status);
};
