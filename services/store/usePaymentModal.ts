import { create } from "zustand";

type PaymentModalProps = {
  isModalOpen: boolean;
  setModalOpen: () => void;
};

const usePaymentModal = create<PaymentModalProps>((set, get) => ({
  isModalOpen: false,
  setModalOpen: () => {
    console.log('open modal')
    set((state) => ({ isModalOpen: !state.isModalOpen }));
  },
}));

export { usePaymentModal };
