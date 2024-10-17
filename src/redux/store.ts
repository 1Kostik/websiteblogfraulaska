import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/slice";
import authReducer from "./auth/slice";
import categoriesReducer from "./categories/slice";
import adsReducer from "./ads/slice";

const persistCartConfig = {
  key: "cart",
  storage,
};

const persistAuthConfig = {
  key: "auth",
  storage,
};

const persistAdsConfig = {
  key: "ads",
  storage,
  whitelist: ["product"],
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedAdsReducer = persistReducer(persistAdsConfig, adsReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    auth: persistedAuthReducer,
    categories: categoriesReducer,
    ads: persistedAdsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
