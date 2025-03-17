import {
  BadgeDollarSign,
  Banknote,
  BusIcon,
  CakeSlice,
  CreditCard,
  Dice6Icon,
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
  "user" | "history" | "modal" | "savedtransactions" | "profile",
  (props: { color: string , opacity : number}) => JSX.Element
> = {
  user: (props: any) => <Home size={24} color={"#222"} {...props} />,
  history: (props: any) => <History size={24} color={"#222"} {...props} />,
  modal: (props: any) => <PlusIcon size={24} color={"#222"} {...props} />,
  savedtransactions: (props: any) => <WalletCards size={24} color={"#222"} {...props} />,
  profile: (props: any) => <User size={24} color={"#222"} {...props} />,
};

const transactionIcons = {
  cash: <BadgeDollarSign size={30} color={"#fff"} />,
  bank_account: <WalletMinimal size={30} color={"#fff"} />,
  card: <CreditCard size={30} color={"#fff"} />,
  expense: <Banknote size={30} color={"#fff"} />,
  income: <HandCoins size={30} color={"#fff"} />,
  Travel : <Plane size={30} color={"#fff"}/>,
  Food : <CakeSlice size={30} color={"#fff"}/>,
  Transport : <BusIcon size={30} color={"#fff"}/>,
  Other : <Dice6Icon size={30} color={"#fff"}/>
};

export { icon, transactionIcons };
