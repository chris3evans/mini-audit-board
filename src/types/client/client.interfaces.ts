import type { IAddress, IInvoice, IVendor } from "../server/server.interfaces";

export interface IInvoiceListProp {
  invoices: IInvoice[];
  vendors: IVendor[];
  addresses: IAddress[];
}

export interface IInvoiceItemProp {
  invoice: IInvoice;
  vendor: IVendor | undefined;
  address: IAddress | undefined;
  onClick?: () => void;
}
