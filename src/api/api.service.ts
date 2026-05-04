import type { IInvoice } from "../types/server/server.interfaces";
import { MOCK_INVOICE_LIST } from "./mock-data";

export const getInvoices = async (): Promise<IInvoice[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_INVOICE_LIST);
    }, 1000);
  });
};
