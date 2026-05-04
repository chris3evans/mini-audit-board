import { Link } from "react-router-dom";
import type { IInvoiceItemProp } from "../../../types/client/client.interfaces";
import { InvoiceId } from "./invoice-id/invoice-id.test";
import styles from "./invoice-item.module.scss";
import { InvoiceNumber } from "./invoice-number/invoice-number";
import { InvoiceVendor } from "./invoice-vendor/invoice-vendor";
import { InvoiceAmount } from "./invoice-amount/invoice-amount";

export const InvoiceItem = ({ invoice }: IInvoiceItemProp) => {
  return (
    <Link to="/invoice" className={styles["invoice-item"]}>
      <InvoiceId id={invoice.id} />
      <InvoiceVendor vendor={invoice.vendor.name} />
      <InvoiceNumber invoiceNumber={invoice.invoice_number} />
      <InvoiceAmount amount={invoice.amount} />
      <div>{invoice.currency}</div>
      <div>{invoice.status}</div>
    </Link>
  );
};
