import { create } from "zustand";

type TransactionModalProps = {
  transactionName: string;
  isTransactionOpen: boolean;
  transactionDatas: [];
  setTransactionName: (name: string) => void;
  setTransactionOpen: () => void;
  setTransactionData: (data: []) => void;
};

const useTransactionModal = create<TransactionModalProps>((set) => ({
  transactionName: "",
  isTransactionOpen: false,
  transactionDatas: [],
  setTransactionName: (name) => {
    set({ transactionName: name });
  },
  setTransactionData: (data) => {
    set({ transactionDatas: data });
  },
  setTransactionOpen: () => {
    set((state) => ({ isTransactionOpen: !state.isTransactionOpen }));
  },
}));
export { useTransactionModal };
