import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/state.hooks";
import {
  useAddresses,
  useInvoices,
  useVendors,
} from "../../../hooks/tanstack-query.hooks";
import styles from "./DetailView.module.scss";
import { ContainerCard } from "../../../components/ContainerCard/ContainerCard";

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
  const { data: addresses, isLoading: addressesLoading } = useAddresses();

  const [renderVendor, setRenderVendor] = useState<boolean>(false);
  const [renderAddress, setRenderAddress] = useState<boolean>(false);

  const selectedInvoice = invoices?.find(
    (invoice) => invoice.id === selectedInvoiceId,
  );
  const selectedVendor = vendors?.find(
    (vendor) => vendor.id === selectedVendorId,
  );
  const selectedAddress = addresses?.find(
    (address) => address.id === selectedAddressId,
  );

  useEffect(() => {
    setRenderVendor(false);
    setRenderAddress(false);
  }, [selectedInvoiceId]);

  useEffect(() => {
    setRenderAddress(false);
  }, [renderVendor]);

  const handleShowVendorClick = (): void => {
    setRenderVendor(!renderVendor);
  };
  const handleShowAddressClick = (): void => {
    setRenderAddress(!renderAddress);
  };

  return (
    <div className={styles["detail-view"]}>
      <ContainerCard>
        {invoicesLoading && <div>Loading Invoice Details</div>}
        {vendorsLoading && <div>Loading Vendor Details</div>}
        {addressesLoading && <div>Loading Address Details</div>}
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
                <button
                  className={styles["button"]}
                  type="button"
                  onClick={handleShowVendorClick}
                >
                  {renderVendor ? "Hide" : "Show"} Vendor
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedVendorId && renderVendor && (
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
                <span>{selectedVendor?.name ?? "Could not load Name"}</span>
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
              <div className={styles["detail-grid-item"]}>
                <button
                  className={styles["button"]}
                  type="button"
                  onClick={handleShowAddressClick}
                >
                  {renderAddress ? "Hide" : "Show"} Address
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedAddressId && renderAddress && (
          <div className={styles["detail-section"]}>
            <h3>Address</h3>
            <div className={styles["detail-grid"]}>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Address Id:</b>
                </span>
                <span>
                  {selectedAddress?.id ?? "Could not load Address ID"}
                </span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Line 1:</b>
                </span>
                <span>
                  {selectedAddress?.line_1 ?? "Could not load Line 1"}
                </span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>City:</b>
                </span>
                <span>{selectedAddress?.city ?? "Could not load City"}</span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Postcode:</b>
                </span>
                <span>
                  {selectedAddress?.postcode ?? "Could not load Postcode"}
                </span>
              </div>
              <div className={styles["detail-grid-item"]}>
                <span>
                  <b>Country:</b>
                </span>
                <span>
                  {selectedAddress?.country ?? "Could not load Country"}
                </span>
              </div>
            </div>
          </div>
        )}
      </ContainerCard>
    </div>
  );
};
