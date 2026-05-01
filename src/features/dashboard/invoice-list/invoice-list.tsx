import type { IInvoiceListProp } from "../../../types/client/client.interfaces";
import { InvoiceItem } from "../invoice-item/invoice-item";
import styles from "./invoice-list.module.scss";

export const InvoiceList = ({ invoices }: IInvoiceListProp) => {
  return (
    <div className={styles["invoice-list"]}>
      {invoices.map((invoice) => (
        <InvoiceItem invoice={invoice} />
      ))}
    </div>
  );
};
