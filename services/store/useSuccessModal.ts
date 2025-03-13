import { create } from "zustand";

type SuccessModalProps = {
  isSuccess: boolean;
  setSuccess: () => void;
  setCloseSuccess: () => void;
};

const useSuccessModal = create<SuccessModalProps>((set, get) => ({
  isSuccess: false,
  setSuccess: () => {
    set({ isSuccess: true });
  },
  setCloseSuccess: () => {
    set({ isSuccess: false });
  },
}));

export { useSuccessModal };
