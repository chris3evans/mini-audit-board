import { Button } from "../../../components/Button/Button";
import { SectionCard } from "../../../components/SectionCard/SectionCard";
import type { IInvoice } from "../../../types/server/server.interfaces";
import styles from "./InvoiceSection.module.scss";

export const InvoiceSection = ({
  selectedInvoice,
  renderVendor,
  onClick,
}: {
  selectedInvoice: IInvoice | undefined;
  renderVendor: boolean;
  onClick: () => void;
}) => {
  return (
    <SectionCard sectionTitle="Invoice">
      <div className={styles["detail-grid"]}>
        <div className={styles["detail-grid-item"]}>
          <span>
            <b>Invoice Id:</b>
          </span>
          <span>{selectedInvoice?.id ?? "Could not load Invoice Id"}</span>
        </div>
        <div className={styles["detail-grid-item"]}>
          <span>
            <b>Invoice Number:</b>
          </span>
          <span>
            {selectedInvoice?.invoice_number ?? "Could not load Invoice Number"}
          </span>
        </div>
        <div className={styles["detail-grid-item"]}>
          <span>
            <b>Invoice Amount:</b>
          </span>
          <span>{selectedInvoice?.amount ?? "Could not load Amount"}</span>
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
          <span>{selectedInvoice?.status ?? "Could not load Status"}</span>
        </div>
        <div className={styles["detail-grid-item"]}>
          <Button
            type="button"
            onClick={onClick}
            buttonText={`${renderVendor ? "Hide" : "Show"} Vendor`}
            size="medium"
            variant="light"
          />
        </div>
      </div>
    </SectionCard>
  );
};
