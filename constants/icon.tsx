import {
  BadgeDollarSign,
  Banknote,
  BusIcon,
  CakeSlice,
  CreditCard,
  Dice6Icon,
  Grip,
  HandCoins,
  History,
  Home,
  Plane,
  PlusIcon,
  User,
  WalletCards,
  WalletMinimal,
} from "lucide-react-native";

const icon: Record<
  "user" | "history" | "modal" | "savedtransactions" | "more",
  (props: { color: string; opacity: number }) => JSX.Element
> = {
  user: (props: any) => <Home size={24} color={"#222"} {...props} />,
  history: (props: any) => <History size={24} color={"#222"} {...props} />,
  modal: (props: any) => <PlusIcon size={24} color={"#222"} {...props} />,
  savedtransactions: (props: any) => <WalletCards size={24} color={"#222"} {...props} />,
  more: (props: any) => <Grip size={24} color={"#222"} {...props} />,
};

const transactionIcons = {
  cash: (props: any) => <BadgeDollarSign size={props.size} color={"#fff"} />,
  bank_account: (props: any) => <WalletMinimal size={props.size} color={"#fff"} />,
  card: (props: any) => <CreditCard size={props.size} color={"#fff"} />,
  expense: (props: any) => <Banknote size={props.size} color={"#fff"} />,
  income: (props: any) => <HandCoins size={props.size} color={"#fff"} />,
  Travel: (props: any) => <Plane size={props.size} color={"#fff"} />,
  Food: (props: any) => <CakeSlice size={props.size} color={"#fff"} />,
  Transport: (props: any) => <BusIcon size={props.size}color={"#fff"} />,
  Other: (props: any) => <Dice6Icon size={props.size} color={"#fff"} />,
};

export { icon, transactionIcons };
