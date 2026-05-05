import { useAppDispatch } from "../../../hooks/state.hooks";
import { setSelectedInvoiceId } from "../../../state/slices/invoiceSlice";
import { setSelectedVendorId } from "../../../state/slices/vendorSlice";
import type { IInvoiceListProp } from "../../../types/client/client.interfaces";
import type {
  IAddress,
  IInvoice,
  IVendor,
} from "../../../types/server/server.interfaces";
import { InvoiceItem } from "../invoice-item/invoice-item";
import styles from "./invoice-list.module.scss";

export const InvoiceList = ({
  invoices,
  vendors,
  addresses,
}: IInvoiceListProp) => {
  const dispatch = useAppDispatch();

  const handleInvoiceItemClick = (
    invoice: IInvoice,
    vendor: IVendor | undefined,
    address: IAddress | undefined,
  ): void => {
    dispatch(setSelectedInvoiceId({ invoiceId: invoice.id }));
    dispatch(setSelectedVendorId({ vendorId: vendor?.id ?? null }));
  };

  return (
    <div className={styles["invoice-list"]}>
      {invoices.map((invoice) => {
        const vendor = vendors.find(
          (vendor) => vendor.id === invoice.vendor_id,
        );

        const address = addresses.find(
          (address) => address.id === vendor?.address_id,
        );

        return (
          <InvoiceItem
            key={invoice.id}
            invoice={invoice}
            vendor={vendor}
            address={address}
            onClick={() => handleInvoiceItemClick(invoice, vendor, address)}
          />
        );
      })}
    </div>
  );
};
