import { Button } from "../../../components/Button/Button";
import { SectionCard } from "../../../components/SectionCard/SectionCard";
import styles from "./VendorSection.module.scss";
import type { IVendor } from "../../../types/server/server.interfaces";

export const VendorSection = ({
  selectedVendor,
  renderAddress,
  onClick,
}: {
  selectedVendor: IVendor | undefined;
  renderAddress: boolean;
  onClick: () => void;
}) => {
  return (
    <SectionCard sectionTitle="Vendor">
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
            {selectedVendor?.account_number ?? "Could not load Account Number"}
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
          <Button
            type="button"
            size="medium"
            variant="light"
            buttonText={`${renderAddress ? "Hide" : "Show"} Address`}
            onClick={onClick}
          />
        </div>
      </div>
    </SectionCard>
  );
};
