import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/main/Home";
import Ionicons from "@expo/vector-icons/Ionicons";
import Search from "../screens/main/Search";
import { Trophy } from "../screens/main/Trophy";
import Games from "../screens/main/Games";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F9F9F9F0",
          position: "absolute",
          zIndex: 100,
        },
        tabBarActiveTintColor: "#08B364",
        tabBarInactiveTintColor: "#A3A3A3",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={Games}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Trophy"
        component={Trophy}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
