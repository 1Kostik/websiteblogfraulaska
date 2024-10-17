import { ICategory } from "./ICategory";

export interface ICategoriesState {
  list: ICategory[];
  isLoading: boolean;
  error: unknown;
}
