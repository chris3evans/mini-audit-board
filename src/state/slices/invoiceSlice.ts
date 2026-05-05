import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IInvoiceState {
  selectedInvoiceId: string;
}

const initialState: IInvoiceState = {
  selectedInvoiceId: "",
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setSelectedInvoiceId(state, action: PayloadAction<{ invoiceId: string }>) {
      state.selectedInvoiceId = action.payload.invoiceId;
    },
  },
});

export const { setSelectedInvoiceId } = invoiceSlice.actions;
export default invoiceSlice.reducer;
