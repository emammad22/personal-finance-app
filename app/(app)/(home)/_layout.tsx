import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/tabs/TabBar";
import { usePaymentModal } from "@/services/store/usePaymentModal";
import ScanModal from "@/components/modals/PaymentModal";

const HomeLayout = () => {
  const { setModalOpen } = usePaymentModal();

  return (
    <>
      <Tabs
        screenOptions={{ headerShown: false, tabBarActiveTintColor: "green" }}
        tabBar={(props) => {
          console.log("props tab", props?.descriptors[props.state.routes[0].key].options);
          return <TabBar {...props} />;
        }}>
        <Tabs.Screen
          name="user"
          options={{
            title: "Home",
            
          }}
        />

        <Tabs.Screen
          name="history"
          options={{
            title: "History",
          }}
        />
        <Tabs.Screen
          name="modal"
          listeners={(listener) => {
            setModalOpen();

            return {
              ...listener,
              tabPress: () => {},
            };
          }}
          options={{
            title: "QR",
          }}
        />
        <Tabs.Screen
          name="ai"
          options={{
            title: "AI",
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: "More",
          }}
        />
      </Tabs>
      <ScanModal />
    </>
  );
};

export default HomeLayout;
