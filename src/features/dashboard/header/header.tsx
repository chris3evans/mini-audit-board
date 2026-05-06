import { HeaderFilterButton } from "../../../components/HeaderFilterButton/HeaderFilterButton";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles["header"]}>
      <HeaderFilterButton buttonText="Invoice Id" />
      <HeaderFilterButton buttonText="Vendor Name" />
      <HeaderFilterButton buttonText="Invoice Number" />
      <HeaderFilterButton buttonText="Amount" />
      <HeaderFilterButton buttonText="Currency" />
      <HeaderFilterButton buttonText="Status" />
    </div>
  );
};
