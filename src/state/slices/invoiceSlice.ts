import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IInvoice } from "../../types/client/interfaces/invoice.interfaces";

export interface IInvoiceState {
  invoices: IInvoice[];
  test: number;
}

const initialState: IInvoiceState = {
  invoices: [],
  test: 0,
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    updateTestState(state, action: PayloadAction<{ amount: number }>) {
      state.test = state.test + action.payload.amount;
    },
  },
});

export const { updateTestState } = invoiceSlice.actions;
export default invoiceSlice.reducer;
