import { useQuery } from "@tanstack/react-query";
import type { Expense } from "./expenses.api";
import { fetchExpenses } from "./expenses.api";

export const EXPENSES_QUERY_KEY = ["expenses"];

export const useExpenses = () => {
  return useQuery<Expense[]>({
    queryKey: EXPENSES_QUERY_KEY,
    queryFn: fetchExpenses,
  });
};
