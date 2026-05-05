import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IAddressState {
  selectedAddressId: string | null;
}

const initialState: IAddressState = {
  selectedAddressId: null,
};

export const addressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    setSelectedAddressId(
      state,
      action: PayloadAction<{ addressId: string | null }>,
    ) {
      state.selectedAddressId = action.payload.addressId;
    },
  },
});

export const { setSelectedAddressId } = addressSlice.actions;
export default addressSlice.reducer;
