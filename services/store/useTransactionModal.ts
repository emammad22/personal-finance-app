import { create } from "zustand";

type TransactionModalProps = {
  transactionName: string;
  isTransactionOpen: boolean;
  transactionDatas: any[];
  setTransactionName: (name: string) => void;
  setTransactionOpen: () => void;
  setTransactionData: (data: any[]) => void;
};

const useTransactionModal = create<TransactionModalProps>((set) => ({
  transactionName: "",
  isTransactionOpen: false,
  transactionDatas: [],
  setTransactionName: (name) => {
    set({ transactionName: name });
  },
  setTransactionData: (data : any[]) => {
    set({ transactionDatas: data });
  },
  setTransactionOpen: () => {
    set((state) => ({ isTransactionOpen: !state.isTransactionOpen }));
  },
}));
export { useTransactionModal };
