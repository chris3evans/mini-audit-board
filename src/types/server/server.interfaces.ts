import type { TCurrency, TInvoiceStatus } from "./server.types";

export interface IInvoice {
  id: string;
  vendor_id: string;
  invoice_number: string;
  amount: number;
  currency: TCurrency;
  status: TInvoiceStatus;
}

export interface IVendor {
  id: string;
  name: string;
  address_id: string;
  vat_number: string;
  account_number: string;
  new_vendor: boolean;
  rating: number;
}

export interface IAddress {
  id: string;
  line_1: string;
  city: string;
  postcode: string;
  country: string;
}
