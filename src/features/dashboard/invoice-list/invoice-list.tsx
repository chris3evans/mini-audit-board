import type { IInvoiceListProp } from "../../../types/client/client.interfaces";

export const InvoiceList = ({ invoices }: IInvoiceListProp) => {
  return (
    <div>
      {invoices.map((invoice) => (
        <div>{invoice.vendor.name}</div>
      ))}
    </div>
  );
};
