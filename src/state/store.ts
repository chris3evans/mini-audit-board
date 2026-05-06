import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./slices/invoiceSlice";
import vendorSlice from "./slices/vendorSlice";
import addressSlice from "./slices/addressSlice";
import appSlice from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    invoices: invoiceSlice,
    vendors: vendorSlice,
    addresses: addressSlice,
    app: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
