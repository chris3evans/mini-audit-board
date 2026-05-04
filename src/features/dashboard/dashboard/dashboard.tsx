import { InvoiceList } from "../invoice-list/invoice-list";
import styles from "./dashboard.module.scss";
import { MOCK_INVOICE_LIST } from "../../../api/mock-data";
import { Header } from "../header/header";

export const Dashboard = () => {
  return (
    <div className={styles["dashboard"]}>
      <h1>Mini Audit Dashboard</h1>
      <Header />
      <InvoiceList invoices={MOCK_INVOICE_LIST} />
      {/* button / form to create new invoices (extra) */}
    </div>
  );
};
