import type { IInvoice } from "../server/server.interfaces";

export interface IInvoiceListProp {
  invoices: IInvoice[];
}

export interface IInvoiceItemProp {
  invoice: IInvoice;
}
