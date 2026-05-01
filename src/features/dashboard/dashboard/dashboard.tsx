import { InvoiceList } from "../invoice-list/invoice-list";
import styles from "./dashboard.module.scss";
import { MOCK_INVOICE_LIST } from "../../../api/mock-data";

export const Dashboard = () => {
  return (
    <div className={styles["dashboard"]}>
      {/* title */}
      <h1>Mini Audit Dashboard</h1>
      {/* headers with filters */}
      {/* list of invoices */}
      <InvoiceList invoices={MOCK_INVOICE_LIST} />
      {/* button / form to create new invoices (extra) */}
    </div>
  );
};
