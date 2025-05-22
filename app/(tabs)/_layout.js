// import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          headerShown: false,
          // tabBarActiveTintColor: Colors.primary,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Home",
            // tabBarIcon: ({ color }) => (
            //   <Ionicons name="map" size={24} color={color} />
            // ),
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            tabBarLabel: "Favorites",
            // tabBarIcon: ({ color }) => (
            //   <Ionicons name="people" size={24} color={color} />
            // ),
          }}
        />
      </Tabs>
    </>
  );
}
