import { useAppSelector } from "../../../hooks/state.hooks";
import { useInvoices } from "../../../hooks/tanstack-query.hooks";
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

  const { data: invoices, isLoading: invoicesLoading } = useInvoices();

  const selectedInvoice = invoices?.find(
    (invoice) => invoice.id === selectedInvoiceId,
  );

  return (
    <div className={styles["detail-view"]}>
      <div className={styles["details"]}>
        {invoicesLoading && <div>Loading Invoice Details</div>}
        {selectedInvoiceId && (
          <div className={styles["detail-section"]}>
            <h3>Invoice</h3>
            <div className={styles["detail-grid"]}>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Invoice Id:</b>
                </span>
                <span>
                  {selectedInvoice?.id ?? "Could not load Invoice Id"}
                </span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Invoice Number:</b>
                </span>
                <span>
                  {selectedInvoice?.invoice_number ??
                    "Could not load Invoice Number"}
                </span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Invoice Amount:</b>
                </span>
                <span>
                  {selectedInvoice?.amount ?? "Could not load Amount"}
                </span>
              </div>

              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Invoice Currency:</b>
                </span>
                <span>{selectedInvoice?.id ?? "Could not load Currency"}</span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Invoice Status:</b>
                </span>
                <span>
                  {selectedInvoice?.status ?? "Could not load Status"}
                </span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <button type="button">Show Vendor</button>
              </div>
            </div>
          </div>
        )}

        <div className={styles["detail-section"]}>
          <h3>Vendor</h3>
          <div className={styles["detail-grid"]}></div>
          {selectedVendorId}
        </div>

        <div className={styles["detail-section"]}>
          <h3>Address</h3>
          <div className={styles["detail-grid"]}></div>
          {selectedAddressId}
        </div>
      </div>
      {/* Change invoice status section */}
    </div>
  );
};
