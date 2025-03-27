import { create } from "zustand";

type ScannerProps = {
  isScanned: boolean;
  isCameraActive: boolean;
  qrResponse: {
    status: string;
    transaction_id: number;
    message: string;
  } | null;
};

type ScannerActions = {
  setScanned: () => void;
  setNotScanned: () => void;
  setCameraActive: () => void;
  setCameraInactive: () => void;
  setQrResponse: (res: any) => void;
};

type Scanner = ScannerActions & ScannerProps;

export const useScanner = create<Scanner>((set) => ({
  qrResponse: null,
  isScanned: false,
  isCameraActive: true,
  setQrResponse: (res) => {
    set({ qrResponse: res });
  },
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
