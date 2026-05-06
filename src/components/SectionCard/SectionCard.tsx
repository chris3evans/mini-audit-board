import type { ReactNode } from "react";
import styles from "./SectionCard.module.scss";

export const SectionCard = ({
  children,
  sectionTitle,
  extraStyles,
}: {
  children: ReactNode;
  sectionTitle: string;
  extraStyles?: string;
}) => {
  return (
    <div className={`${styles["detail-section"]} ${extraStyles ?? ""}`}>
      <h3>{sectionTitle}</h3>
      {children}
    </div>
  );
};
