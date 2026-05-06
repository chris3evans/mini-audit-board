import { SectionCard } from "../../../components/SectionCard/SectionCard";
import type { IAddress } from "../../../types/server/server.interfaces";
import styles from "./AddressSection.module.scss";

export const AddressSection = ({
  selectedAddress,
}: {
  selectedAddress: IAddress | undefined;
}) => {
  return (
    <SectionCard sectionTitle="Address">
      <div className={styles["detail-grid"]}>
        <div className={styles["detail-grid-item"]}>
          <span>
            <b>Address Id:</b>
          </span>
          <span>{selectedAddress?.id ?? "Could not load Address ID"}</span>
        </div>
        <div className={styles["detail-grid-item"]}>
          <span>
            <b>Line 1:</b>
          </span>
          <span>{selectedAddress?.line_1 ?? "Could not load Line 1"}</span>
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
          <span>{selectedAddress?.postcode ?? "Could not load Postcode"}</span>
        </div>
        <div className={styles["detail-grid-item"]}>
          <span>
            <b>Country:</b>
          </span>
          <span>{selectedAddress?.country ?? "Could not load Country"}</span>
        </div>
      </div>
    </SectionCard>
  );
};
