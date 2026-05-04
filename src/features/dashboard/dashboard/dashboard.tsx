import { InvoiceList } from "../invoice-list/invoice-list";
import styles from "./dashboard.module.scss";
import { Header } from "../header/header";
import { useInvoices } from "../../../hooks/tanstack-query.hooks";

export const Dashboard = () => {
  const { data, isLoading } = useInvoices();

  if (isLoading) {
    return <div>Invoices are loading!</div>;
  }

  return (
    <div className={styles["dashboard"]}>
      <h1>Mini Audit Dashboard</h1>
      <Header />
      <InvoiceList invoices={data ?? []} />
      {/* button / form to create new invoices (extra) */}
    </div>
  );
};
