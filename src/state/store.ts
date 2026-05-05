import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./slices/invoiceSlice";
import vendorSlice from "./slices/vendorSlice";

export const store = configureStore({
  reducer: {
    invoices: invoiceSlice,
    vendors: vendorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
