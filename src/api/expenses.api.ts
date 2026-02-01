import api from "./axios";

export type Expense = {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
};

export const fetchExpenses = async (): Promise<Expense[]> => {
  const { data } = await api.get("/expenses");
  return data;
};
