import type { TCurrency } from "./server.types";

export interface IInvoice {
  id: string;
  vendor: IVendor;
  invoice_number: string;
  amount: number;
  currency: TCurrency;
}

export interface IVendor {
  id: string;
  name: string;
  address: IAddress;
  vat_number: string;
  account_number: string;
  new_vendor: boolean;
  rating: number;
}

export interface IAddress {
  line_1: string;
  city: string;
  postcode: string;
  country: string;
}
