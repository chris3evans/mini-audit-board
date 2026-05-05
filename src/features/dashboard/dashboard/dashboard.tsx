import { InvoiceList } from "../invoice-list/invoice-list";
import styles from "./dashboard.module.scss";
import { Header } from "../header/header";
import { useInvoices, useVendors } from "../../../hooks/tanstack-query.hooks";

export const Dashboard = () => {
  const { data: invoices, isLoading: invoiceLoading } = useInvoices();
  const { data: vendors, isLoading: vendorsLoading } = useVendors();

  if (invoiceLoading) {
    return <div>Invoices are loading!</div>;
  }

  if (vendorsLoading) {
    return <div>Vendors are loading!</div>;
  }

  return (
    <div className={styles["dashboard"]}>
      <h1>Mini Audit Dashboard</h1>
      <Header />
      <InvoiceList vendors={vendors ?? []} invoices={invoices ?? []} />
      {/* button / form to create new invoices (extra) */}
    </div>
  );
};
