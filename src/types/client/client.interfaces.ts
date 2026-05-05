import type { IInvoice, IVendor } from "../server/server.interfaces";

export interface IInvoiceListProp {
  invoices: IInvoice[];
  vendors: IVendor[];
}

export interface IInvoiceItemProp {
  invoice: IInvoice;
  vendor: IVendor | undefined;
}
