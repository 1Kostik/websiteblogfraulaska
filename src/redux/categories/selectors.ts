import { RootState } from "redux/store";

export const selectCategories = (state: RootState) => state.categories.list;
