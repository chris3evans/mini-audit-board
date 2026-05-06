export const InvoiceVendor = ({ vendor }: { vendor: string | undefined }) => {
  return <div>{vendor ?? "No Vendor"}</div>;
};
