import axios from "axios";
import { toast } from "react-toastify";

import { clearToken } from "@redux/auth/slice";
import { AppDispatch } from "@redux/store";

import { handlerAxiosError } from "../errorHandler/errorHandler";

import { ICourseRegistrationData } from "Interfaces/ICourseRegistrationData";
import { IOrder } from "Interfaces/IOrder";
import { IOrderCreation } from "Interfaces/IOrderCreation";

axios.defaults.baseURL = "https://perunitsa.com/api/";

axios.defaults.headers.common["Accept"] = "application/json";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getAuth = () => {
  const jsonString = localStorage.getItem("persist:auth");
  const authToken =
    jsonString && JSON.parse(jsonString).token.replace(/^"(.*)"$/, "$1");
  if (authToken !== "null") {
    setAuthHeader(authToken);
  }
};

export const authenticateUser = async (email: string, password: string) => {
  try {
    const { data } = await axios.post("/login", { email, password });

    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const logOut = async (dispatch: AppDispatch) => {
  getAuth();
  try {
    await axios.post("logout");
    dispatch(clearToken());
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const getCategories = async () => {
  try {
    const { data } = await axios.get("categories");
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const postCategory = async (title: string) => {
  getAuth();
  try {
    const newCategory = { title };
    const { data } = await axios.post("categories", newCategory);
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const patchCategory = async ({
  id,
  name,
}: {
  id: number;
  name: string;
}) => {
  getAuth();
  try {
    const { data } = await axios.patch(`categories/${id}`, { title: name });
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const deleteCategory = async (id: number) => {
  getAuth();
  try {
    const { data } = await axios.delete(`categories/${id}`);
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const postAdvert = async (formData: FormData) => {
  getAuth();
  try {
    const { data } = await axios.post("products", formData);
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const deleteAdvert = async (id: number) => {
  getAuth();
  try {
    const { data } = await axios.delete(`products/${id}`);
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const putchAdvert = async ({
  id,
  formData,
}: {
  id: number;
  formData: FormData;
}) => {
  getAuth();
  try {
    const { data } = await axios.patch(`products/${id}`, formData);
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const getProductById = async (id: number) => {
  try {
    const { data } = await axios.get(`products/${id}`);
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`products`);
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const getProductsAndSorted = async (queryParams: string) => {
  try {
    const { data } = await axios.get(`products?${queryParams}`);
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const findProducts = async (queryParams: string) => {
  try {
    const { data } = await axios.get(`products?${queryParams}`);
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const getCategoriesProductCount = async () => {
  getAuth();
  try {
    const { data } = await axios.get(`categories/product-count`);
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const deleteProductImage = async (id: number) => {
  getAuth();
  try {
    const { data } = await axios.delete(`products/images/${id}`);
    toast.success("Зображення видалено");
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const deleteProductVariationById = async (id: number) => {
  getAuth();
  try {
    const { data } = await axios.delete(`products/variations/${id}`);
    toast.success("Варіацію видалено");
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const deleteProductFeedbackById = async (id: number) => {
  getAuth();
  try {
    const { data } = await axios.delete(`products/feedbacks/${id}`);
    toast.success("Відгук видалено");
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const makePayment = async (orderDetails: IOrder) => {
  getAuth();
  try {
    const { data } = await axios.post("payment", orderDetails);
    if (data.redirectUrl) {
      console.log("data.order_id", data.order_id);
      window.location.href = data.redirectUrl;
    } else {
      toast.error("Шось пішло не так");
    }
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const makeOrder = async (orderInfo: IOrderCreation) => {
  getAuth();
  try {
    const { data } = await axios.post("orders", orderInfo);
    toast.success("Замовлення створено");
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const getOrders = async (queryParams: string) => {
  getAuth();
  try {
    const data = await axios.get(`orders?${queryParams}`);
    return data.data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};
export const getOrderById = async (id: number) => {
  getAuth();
  try {
    const data = await axios.get(`orders/${id}`);
    return data.data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const updateOrder = async (orderId: number, status: string) => {
  getAuth();
  try {
    const { data } = await axios.put(`orders/${orderId}`, { status });
    toast.success("Статус замовлення змінено");
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};
export const updateProductCountIncrease = async (id: number, count: number) => {
  const data = {
    count,
  };
  try {
    await axios.patch(`products/variations/increase/${id}`, data);
    toast.success("Кількість продукту успішно оновлено!");
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};
export const updateProductCountDecrease = async (id: number, count: number) => {
  const data = {
    count,
  };
  try {
    await axios.patch(`products/variations/decrease/${id}`, data);
    toast.success("Кількість продукту успішно оновлено!");
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};
export const deleteOrder = async (id: number) => {
  getAuth();
  try {
    await axios.delete(`orders/${id}`);
    toast.success("Замовлення успішно видалено!");
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};
export const updatePaymentStatus = async (id: number) => {
  getAuth();
  try {
    await axios.patch(`orders/payment-status/${id}`);
    toast.success("Сатус оплати успішно змінено!");
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};
export const getNPCities = async (cityName: string) => {
  try {
    const { data } = await axios.post("/new-post/settlements", { cityName });
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};
export const getWarehouses = async (cityRef: string) => {
  try {
    const { data } = await axios.post("/new-post/warehouses", { cityRef });
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};
export const getPopularityProducts = async () => {
  try {
    const { data } = await axios.get("products-popularity");
    return data;
  } catch (error: unknown) {
    handlerAxiosError(error);
  }
};

export const sendCourseNotification = async (
  registrationFormData: ICourseRegistrationData
) => {
  try {
    const { data } = await axios.post("/courses", registrationFormData);
    toast.success(`Ви зареєструвалися на курс`);
    return data;
  } catch (error) {
    toast.error("Шось пішло не так");
    if (axios.isAxiosError(error)) {
      console.log("Axios error:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Non-Axios error:", error);
      throw new Error("Non-Axios error occurred");
    }
  }
};
