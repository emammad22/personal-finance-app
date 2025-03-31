import {
  BadgeDollarSign,
  Banknote,
  Beef,
  BusIcon,
  CakeSlice,
  Candy,
  CreditCard,
  Dice6Icon,
  Grip,
  HandCoins,
  History,
  Home,
  Plane,
  PlusIcon,
  Shirt,
  WalletCards,
  WalletMinimal,
  Wand,
} from "lucide-react-native";

const icon: Record<
  "user" | "history" | "modal" | "ai" | "more",
  (props: { color: string; opacity: number }) => JSX.Element
> = {
  user: (props: any) => <Home size={24} color={"#222"} {...props} />,
  history: (props: any) => <History size={24} color={"#222"} {...props} />,
  modal: (props: any) => <PlusIcon size={24} color={"#222"} {...props} />,
  ai: (props: any) => <Wand size={24} color={"#222"} {...props} />,
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
  Transport: (props: any) => <BusIcon size={props.size} color={"#fff"} />,
  Other: (props: any) => <Dice6Icon size={props.size} color={"#fff"} />,
  Sweets: (props: any) => <Candy size={props.size} color={"#fff"} />,
  Clothing: (props: any) => <Shirt size={props.size} color={"#fff"} />,
  Meat: (props: any) => <Beef size={props.size} color={"#fff"} />,
};

const categoryColors = {
  Sweets: "#2596be",
  Clothing: "#abdbe3",
  Transport: "#e28743",
  Food: "#873e23",
  Travel: "#9eeb34",
  Other: "#eb34c6",
  Meat : "#eb346e"
};

export { icon, transactionIcons, categoryColors };
