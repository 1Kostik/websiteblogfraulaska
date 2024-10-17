import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";

import {
  createCategory,
  editCategory,
  fetchCategories,
  removeCategory,
} from "./operations";

import { ICategoriesState } from "Interfaces/ICategoriesState";
import { ICategory } from "Interfaces/ICategory";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: ICategoriesState) => {
  state.isLoading = true;
};

const handleFulfilled = (
  state: ICategoriesState,
  { payload }: PayloadAction<ICategory[]>
) => {
  state.list = payload;
  state.isLoading = false;
};

const handleRejected = (
  state: ICategoriesState,
  { payload }: PayloadAction<unknown>
) => {
  state.error = payload;
  state.isLoading = false;
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          fetchCategories.fulfilled,
          createCategory.fulfilled,
          removeCategory.fulfilled,
          editCategory.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          fetchCategories.pending,
          createCategory.pending,
          removeCategory.pending,
          editCategory.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchCategories.rejected,
          createCategory.rejected,
          removeCategory.rejected,
          editCategory.rejected
        ),
        handleRejected
      );
  },
});

export default categoriesSlice.reducer;
