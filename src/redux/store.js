import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { API } from "./api/apiSlice";
import companySlice from "./features/company/companySlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["persist/PERSIST"],
};

const rootReducer = combineReducers({
  companyFilterParams: companySlice.reducer,

  [API.reducerPath]: API.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(API.middleware),
});

export const persistor = persistStore(store);
