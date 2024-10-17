import { KnownError } from "@redux/categories/operations";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import {
  deleteAdvert,
  getProductById,
  postAdvert,
  putchAdvert,
} from "@services/servicesApi";

export const createProduct = createAsyncThunk(
  "ads/create",
  async (formData: FormData, thunkAPI) => {
    try {
      const advert = await postAdvert(formData);
      toast.success("Оголошення створено");
      return advert;
    } catch (err) {
      toast.error("Шось пійшло не так");
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue({
        errorMessage: error.response.data,
      });
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "ads/delete",
  async (id: number, thunkAPI) => {
    try {
      const data = await deleteAdvert(id);
      toast.success("Оголошення видалено");
      return data;
    } catch (err) {
      toast.error("Шось пійшло не так");
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue({
        errorMessage: error.response.data,
      });
    }
  }
);

export const updateProduct = createAsyncThunk(
  "ads/update",
  async ({ id, formData }: { id: number; formData: FormData }, thunkAPI) => {
    try {
      const { product } = await putchAdvert({ id, formData });
      toast.success("Оголошення змінено");
      return product;
    } catch (err) {
      // toast.error("Шось пійшло не так");
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue({
        errorMessage: error.response.data,
      });
    }
  }
);

export const getProduct = createAsyncThunk(
  "ads/getProduct",
  async (id: number, thunkAPI) => {
    try {
      const product = await getProductById(id);
      return product;
    } catch (err) {
      toast.error("Шось пійшло не так");
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue({
        errorMessage: error.response.data,
      });
    }
  }
);
