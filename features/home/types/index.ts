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
    };
  };