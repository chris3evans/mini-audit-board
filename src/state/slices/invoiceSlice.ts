import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IInvoice } from "../../types/server/server.interfaces";

export interface IInvoiceState {
  invoices: IInvoice[];
}

const initialState: IInvoiceState = {
  invoices: [],
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},
});

export const {} = invoiceSlice.actions;
export default invoiceSlice.reducer;
