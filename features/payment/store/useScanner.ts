import { create } from "zustand";

type ScannerProps = {
  isScanned: boolean;
  isCameraActive: boolean;
};

type ScannerActions = {
  setScanned: () => void;
  setNotScanned: () => void;
  setCameraActive: () => void;
  setCameraInactive: () => void;
};

type Scanner = ScannerActions & ScannerProps;

export const useScanner = create<Scanner>((set) => ({
  isScanned: false,
  isCameraActive: true,
  setScanned: () => {
    set({ isScanned: true });
  },
  setNotScanned: () => {
    set({ isScanned: false });
  },
  setCameraActive: () => {
    set({ isCameraActive: true });
  },
  setCameraInactive: () => {
    set({ isCameraActive: false });
  },
}));
