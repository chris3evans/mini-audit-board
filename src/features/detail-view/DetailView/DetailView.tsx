import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/state.hooks";
import {
  useAddresses,
  useInvoices,
  useVendors,
} from "../../../hooks/tanstack-query.hooks";
import styles from "./DetailView.module.scss";
import { ContainerCard } from "../../../components/ContainerCard/ContainerCard";
import { SectionCard } from "../../../components/SectionCard/SectionCard";
import { Button } from "../../../components/Button/Button";
import { InvoiceSection } from "../InvoiceSection/InvoiceSection";
import { VendorSection } from "../VendorSection/VendorSection";

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
          <InvoiceSection
            selectedInvoice={selectedInvoice}
            renderVendor={renderVendor}
            onClick={handleShowVendorClick}
          />
        )}

        {selectedVendorId && renderVendor && (
          <VendorSection
            onClick={handleShowAddressClick}
            renderAddress={renderAddress}
            selectedVendor={selectedVendor}
          />
        )}

        {selectedAddressId && renderAddress && (
          <SectionCard sectionTitle="Address">
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
          </SectionCard>
        )}
      </ContainerCard>
    </div>
  );
};
