export type TransactionProps = {
  id: number;
  transaction_unique_id: string;
  amount: string;
  transaction_type: string;
  payment_type: string;
  note: string;
  is_saved: boolean;
  created_at: string;
  updated_at: string;
  category: {
    id: number;
    name: string;
  } | null;
};

export type UserCard = {
  id: number;
  cardholder_name: string;
  number: string;
  logo: undefined;
  balance: number;
  expire_date: string;
  is_active: boolean;
  image: null;
};

export type Category = {
  category_id: number;
  category_name: string;
  transaction_count: number;
  total_amount: number;
  percentage: number;
};

export type CategoryStatistics = {
  categories: Category[];
  total_expense: number;
};
