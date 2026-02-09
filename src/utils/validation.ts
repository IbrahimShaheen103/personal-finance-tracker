export type FormErrors = {
  title?: string;
  amount?: string;
  category?: string;
  date?: string;
};

export const validateExpenseForm = (
  title: string,
  amount: string,
  category: string,
  date: string
): FormErrors => {
  const errors: FormErrors = {};

  if (!title.trim()) {
    errors.title = "Title is required";
  } else if (title.trim().length < 2) {
    errors.title = "Title must be at least 2 characters";
  }

  if (!amount) {
    errors.amount = "Amount is required";
  } else if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
    errors.amount = "Amount must be a positive number";
  }

  if (!category.trim()) {
    errors.category = "Category is required";
  }

  if (!date) {
    errors.date = "Date is required";
  } else if (new Date(date) > new Date()) {
    errors.date = "Date cannot be in the future";
  }

  return errors;
};
