import type { ReactNode } from "react";
import styles from "./ContainerCard.module.scss";

export const ContainerCard = ({
  children,
  extraStyles,
}: {
  children: ReactNode;
  extraStyles?: string;
}) => {
  return (
    <div className={`${styles["container-card"]} ${extraStyles ?? ""}`}>
      {children}
    </div>
  );
};
