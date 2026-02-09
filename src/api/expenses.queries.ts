import { useMutation, useQuery } from "@tanstack/react-query";
import type { Expense } from "./expenses.api";
import { createExpense, fetchExpenses } from "./expenses.api";
import { queryClient } from "./queryClient";

export const EXPENSES_QUERY_KEY = ["expenses"];

export const useExpenses = () => {
  return useQuery<Expense[]>({
    queryKey: EXPENSES_QUERY_KEY,
    queryFn: fetchExpenses,
  });
};

export const useCreateExpense = () => {
  return useMutation({
    mutationFn: createExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: EXPENSES_QUERY_KEY });
    },
  });
};
