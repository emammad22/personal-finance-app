import { History, ListCollapse, Scan, ScanBarcode, User, WalletCards } from "lucide-react-native";

const icon: Record<"user" | "history" | "modal" | "savedtransactions", (props: { color: string }) => JSX.Element> = {
  user: (props: any) => <User size={24} color={"#222"} {...props} />,
  history: (props: any) => <History size={24} color={"#222"} {...props} />,
  modal: (props: any) => <ScanBarcode size={24} color={"#222"} {...props} />,
  savedtransactions: (props: any) => <WalletCards size={24} color={"#222"} {...props} />,
};

export { icon };
