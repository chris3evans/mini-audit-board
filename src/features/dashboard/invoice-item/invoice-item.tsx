import type { IInvoiceItemProp } from "../../../types/client/client.interfaces";
import styles from "./invoice-item.module.scss";

export const InvoiceItem = ({ invoice }: IInvoiceItemProp) => {
  return (
    <div className={styles["invoice-item"]}>
      <div>ID: {invoice.id}</div>
      <div>Vendor: {invoice.vendor.name}</div>

      <div>Invoice Number: {invoice.invoice_number}</div>
      <div>Amount: {invoice.amount}</div>
      <div>Currency: {invoice.currency}</div>
      <div>Status: {invoice.status}</div>
    </div>
  );
};
