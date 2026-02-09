import api from "./axios";

export type Expense = {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
};

export type CreateExpenseInput = Omit<Expense, "id">;

export const fetchExpenses = async (): Promise<Expense[]> => {
  const { data } = await api.get("/expenses");
  return data;
};

export const createExpense = async (
  expense: CreateExpenseInput
): Promise<Expense> => {
  const { data } = await api.post("/expenses", expense);
  return data;
};
