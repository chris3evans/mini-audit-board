import { useAppSelector } from "../../../hooks/state.hooks";
import styles from "./detail-view.module.scss";

export const DetailView = ({}) => {
  const selectedInvoiceId = useAppSelector(
    (state) => state.invoices.selectedInvoiceId,
  );
  const selectedVendorId = useAppSelector(
    (state) => state.vendors.selectedVendorId,
  );
  const selectedAddressId = useAppSelector(
    (state) => state.addresses.selectedAddressId,
  );

  return (
    <div className={styles["detail-view"]}>
      <div className={styles["details"]}>
        <div className={styles["invoice-details"]}>{selectedInvoiceId}</div>

        <div className={styles["vendor-details"]}>{selectedVendorId}</div>

        <div className={styles["address-details"]}>{selectedAddressId}</div>
      </div>
      {/* Change invoice status section */}
    </div>
  );
};
