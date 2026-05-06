import { useState } from "react";
import { HeaderFilterButton } from "../../../components/HeaderFilterButton/HeaderFilterButton";
import type { TInvoiceFilter } from "../../../types/client/client.types";
import styles from "./Header.module.scss";

export const Header = () => {
  const [activeFilter, setActiveFilter] = useState<TInvoiceFilter>(null);

  const handleFilterClick = (filter: TInvoiceFilter): void => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };

  return (
    <div className={styles["header"]}>
      <HeaderFilterButton
        filterActive={activeFilter === "id"}
        buttonText="Invoice Id"
        onClick={() => handleFilterClick("id")}
      />
      <HeaderFilterButton
        filterActive={activeFilter === "vendor_id"}
        buttonText="Vendor Name"
        onClick={() => handleFilterClick("vendor_id")}
      />
      <HeaderFilterButton
        filterActive={activeFilter === "invoice_number"}
        buttonText="Invoice Number"
        onClick={() => handleFilterClick("invoice_number")}
      />
      <HeaderFilterButton
        filterActive={activeFilter === "amount"}
        buttonText="Amount"
        onClick={() => handleFilterClick("amount")}
      />
      <HeaderFilterButton
        filterActive={activeFilter === "currency"}
        buttonText="Currency"
        onClick={() => handleFilterClick("currency")}
      />
      <HeaderFilterButton
        filterActive={activeFilter === "status"}
        buttonText="Status"
        onClick={() => handleFilterClick("status")}
      />
    </div>
  );
};
