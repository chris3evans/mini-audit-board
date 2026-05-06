import { Link } from "react-router-dom";
import type { IInvoiceItemProp } from "../../../types/client/client.interfaces";
import { InvoiceId } from "./InvoiceId/InvoiceId.test";
import styles from "./InvoiceItem.module.scss";
import { InvoiceNumber } from "./InvoiceNumber/InvoiceNumber";
import { InvoiceAmount } from "./InvoiceAmount/InvoiceAmount";
import { InvoiceVendor } from "./InvoiceVendor/InvoiceVendor";

export const InvoiceItem = ({
  invoice,
  vendor,
  address,
  onClick,
}: IInvoiceItemProp) => {
  return (
    <Link to="/invoice" className={styles["invoice-item"]} onClick={onClick}>
      <InvoiceId id={invoice.id} />
      <InvoiceVendor vendor={vendor && vendor.name} />
      <InvoiceNumber invoiceNumber={invoice.invoice_number} />
      <InvoiceAmount amount={invoice.amount} />
      <div>{invoice.currency}</div>
      <div>{invoice.status}</div>
    </Link>
  );
};
