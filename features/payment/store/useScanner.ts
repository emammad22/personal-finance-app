import { create } from "zustand";

type ScannerProps = {
  isScanned: boolean;
};

type ScannerActions = {
  setScanned: () => void;
  setNotScanned: () => void;
};

type Scanner = ScannerActions & ScannerProps;

export const useScanner = create<Scanner>((set) => ({
  isScanned: false,
  setScanned: () => {
    set({ isScanned: true });
  },
  setNotScanned: () => {
    set({ isScanned: false });
  },
}));
