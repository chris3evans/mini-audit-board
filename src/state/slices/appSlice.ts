import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TInvoiceFilter } from "../../types/client/client.types";

export interface IAppState {
  activeInvoiceFilter: TInvoiceFilter;
}

const initialState: IAppState = {
  activeInvoiceFilter: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveInvoiceFilter(
      state,
      action: PayloadAction<{ filter: TInvoiceFilter }>,
    ) {
      state.activeInvoiceFilter = action.payload.filter;
    },
  },
});

export const { setActiveInvoiceFilter } = appSlice.actions;
export default appSlice.reducer;
