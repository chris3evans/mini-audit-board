import type { IInvoiceListProp } from "../../../types/client/client.interfaces";
import { InvoiceItem } from "../invoice-item/invoice-item";
import styles from "./invoice-list.module.scss";

export const InvoiceList = ({
  invoices,
  vendors,
  addresses,
}: IInvoiceListProp) => {
  return (
    <div className={styles["invoice-list"]}>
      {invoices.map((invoice) => {
        const vendor = vendors.find(
          (vendor) => vendor.id === invoice.vendor_id,
        );

        const address = addresses.find(
          (address) => address.id === vendor?.address_id,
        );

        return (
          <InvoiceItem
            key={invoice.id}
            invoice={invoice}
            vendor={vendor}
            address={address}
          />
        );
      })}
    </div>
  );
};
