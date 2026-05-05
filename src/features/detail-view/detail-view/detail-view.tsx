import { useAppSelector } from "../../../hooks/state.hooks";
import { useInvoices, useVendors } from "../../../hooks/tanstack-query.hooks";
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
  const { data: vendors, isLoading: vendorsLoading } = useVendors();

  const selectedInvoice = invoices?.find(
    (invoice) => invoice.id === selectedInvoiceId,
  );
  const selectedVendor = vendors?.find(
    (vendor) => vendor.id === selectedVendorId,
  );

  return (
    <div className={styles["detail-view"]}>
      <div className={styles["details"]}>
        {invoicesLoading && <div>Loading Invoice Details</div>}
        {vendorsLoading && <div>Loading Vendor Details</div>}
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

        {selectedVendorId && (
          <div className={styles["detail-section"]}>
            <h3>Vendor</h3>
            <div className={styles["detail-grid"]}>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Vendor Id:</b>
                </span>
                <span>{selectedVendor?.id ?? "Could not load Vendor Id"}</span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Name:</b>
                </span>
                <span>{selectedVendor?.id ?? "Could not load Name"}</span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>VAT Number:</b>
                </span>
                <span>
                  {selectedVendor?.vat_number ?? "Could not load VAT Number"}
                </span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Account Number:</b>
                </span>
                <span>
                  {selectedVendor?.account_number ??
                    "Could not load Account Number"}
                </span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>New Vendor:</b>
                </span>
                <span>
                  {selectedVendor?.new_vendor !== undefined
                    ? `${selectedVendor.new_vendor}`
                    : "Could not load New Vendor Status"}
                </span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Rating:</b>
                </span>
                <span>{selectedVendor?.rating ?? "Could not load Rating"}</span>
              </div>
            </div>
          </div>
        )}

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
