import type { IInvoice, IVendor } from "../types/server/server.interfaces";
import { MOCK_INVOICE_LIST, MOCK_VENDOR_LIST } from "./mock-data";

export const getInvoices = async (): Promise<IInvoice[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_INVOICE_LIST);
    }, 1000);
  });
};

export const getVendors = async (): Promise<IVendor[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_VENDOR_LIST);
    }, 500);
  });
};
