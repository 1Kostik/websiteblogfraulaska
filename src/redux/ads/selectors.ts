import { RootState } from "@redux/store";

export const selectProduct = (state: RootState) => state.ads.product;
export const selectIsAdsLoading = (state: RootState) => state.ads.isLoading;
export const selectAdsError = (state: RootState) => state.ads.error;
