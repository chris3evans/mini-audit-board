import { InvoiceList } from "../InvoiceList/InvoiceList";
import styles from "./dashboard.module.scss";
import {
  useAddresses,
  useInvoices,
  useVendors,
} from "../../../hooks/tanstack-query.hooks";
import { Header } from "../Header/Header";

export const Dashboard = () => {
  const { data: invoices, isLoading: invoiceLoading } = useInvoices();
  const { data: vendors, isLoading: vendorsLoading } = useVendors();
  const { data: addresses, isLoading: addressesLoading } = useAddresses();

  if (invoiceLoading) {
    return <div>Invoices are loading!</div>;
  }

  if (vendorsLoading) {
    return <div>Vendors are loading!</div>;
  }

  if (addressesLoading) {
    return <div>Addresses are loading!</div>;
  }

  return (
    <div className={styles["dashboard"]}>
      <h1>Mini Audit Dashboard</h1>
      <Header />
      <InvoiceList
        addresses={addresses ?? []}
        vendors={vendors ?? []}
        invoices={invoices ?? []}
      />
      {/* button / form to create new invoices (extra) */}
    </div>
  );
};
