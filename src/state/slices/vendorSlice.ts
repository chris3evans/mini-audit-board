import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IVendorState {
  selectedVendorId: string | null;
}

const initialState: IVendorState = {
  selectedVendorId: "",
};

export const vendorSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    setSelectedVendorId(
      state,
      action: PayloadAction<{ vendorId: string | null }>,
    ) {
      state.selectedVendorId = action.payload.vendorId;
    },
  },
});

export const { setSelectedVendorId } = vendorSlice.actions;
export default vendorSlice.reducer;
