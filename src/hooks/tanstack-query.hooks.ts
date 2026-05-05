import { useQuery } from "@tanstack/react-query";
import { getInvoices, getVendors } from "../api/api.service";

export const useInvoices = () => {
  return useQuery({
    queryKey: ["invoice"],
    queryFn: getInvoices,
  });
};

export const useVendors = () => {
  return useQuery({
    queryKey: ["invoices"],
    queryFn: getVendors,
  });
};
