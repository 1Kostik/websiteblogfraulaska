import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import {
  deleteCategory,
  getCategories,
  patchCategory,
  postCategory,
} from "@services/servicesApi";

export type KnownError = {
  errorMessage: string;
};

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async (_, thunkAPI) => {
    try {
      const categories = await getCategories();
      return categories;
    } catch (err) {
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue({ errorMessage: error.response.data });
    }
  }
);

export const createCategory = createAsyncThunk(
  "category/create",
  async (title: string, thunkAPI) => {
    try {
      const categories = await postCategory(title);
      toast.success("Категорію створено");
      return categories;
    } catch (err) {
      toast.error("Шось пійшло не так");
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue({ errorMessage: error.response.data });
    }
  }
);

export const removeCategory = createAsyncThunk(
  "category/delete",
  async (id: number, thunkAPI) => {
    try {
      const categories = await deleteCategory(id);
      toast.success("Категорія видалена");
      return categories;
    } catch (err) {
      toast.error("Шось пійшло не так");
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue({ errorMessage: error.response.data });
    }
  }
);

export const editCategory = createAsyncThunk(
  "category/edit",
  async ({ id, name }: { id: number; name: string }, thunkAPI) => {
    try {
      const categories = await patchCategory({ id, name });
      toast.success("Категорію змінено");
      return categories;
    } catch (err) {
      toast.error("Шось пійшло не так");
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue({ errorMessage: error.response.data });
    }
  }
);
