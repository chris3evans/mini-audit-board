import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header-column"]}>
        <h3>Invoice Id</h3>
      </div>
      <div className={styles["header-column"]}>
        <h3>Invoice Number</h3>
      </div>

      <div className={styles["header-column"]}>
        <h3>Amount</h3>
      </div>
      <div className={styles["header-column"]}>
        <h3>Currency</h3>
      </div>
      <div className={styles["header-column"]}>
        <h3>Status</h3>
      </div>
    </div>
  );
};
