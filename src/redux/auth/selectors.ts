import { RootState } from "@redux/store";

export const selectToken = (state: RootState) => state.auth.token;
export const selectUserName = (state: RootState) => state.auth.username;
export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
