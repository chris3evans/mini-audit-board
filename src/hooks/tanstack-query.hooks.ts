import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "../api/api.service";

export const useInvoices = () => {
  return useQuery({
    queryKey: ["invoice"],
    queryFn: getInvoices,
  });
};
