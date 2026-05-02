import type { IInvoiceItemProp } from "../../../types/client/client.interfaces";
import { InvoiceId } from "./invoice-id/invoice-id.test";
import styles from "./invoice-item.module.scss";

export const InvoiceItem = ({ invoice }: IInvoiceItemProp) => {
  return (
    <div className={styles["invoice-item"]}>
      <InvoiceId id={invoice.id} />
      <div>{invoice.vendor.name}</div>

      <div>{invoice.invoice_number}</div>
      <div>{invoice.amount}</div>
      <div>{invoice.currency}</div>
      <div>{invoice.status}</div>
    </div>
  );
};
