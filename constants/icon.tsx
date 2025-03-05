import { History, ListCollapse, User } from "lucide-react-native";

const icon: Record<"user" | "history" | "more", (props: { color: string }) => JSX.Element> = {
  user: (props: any) => <User size={24} color={"#222"} {...props} />,
  history: (props: any) => <History size={24} color={"#222"} {...props} />,
  more: (props: any) => <ListCollapse size={24} color={"#222"} {...props} />,
};

export { icon };
