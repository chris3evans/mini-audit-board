import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./slices/invoiceSlice";
import vendorSlice from "./slices/vendorSlice";
import addressSlice from "./slices/addressSlice";

export const store = configureStore({
  reducer: {
    invoices: invoiceSlice,
    vendors: vendorSlice,
    addresses: addressSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
