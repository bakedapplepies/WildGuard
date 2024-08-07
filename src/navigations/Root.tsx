import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "./TabNav";
import ErrorOverlay from "../components/ErrorOverlay";
import { useAppSelector } from "../store";
import NewDetail from "../screens/main/NewDetail";
import DetailAmazingSpace from "../screens/main/DetailAmazingSpace";
import DetailQuestion from "../components/DetailQuestion";
import ListAmazing from "../screens/main/ListAmazing";

const Stack = createNativeStackNavigator();

const Root = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <>
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Chat"
        >
          {/*{!user && <Stack.Screen name="Auth" component={AuthStack} />}*/}
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen name="NewDetail" component={NewDetail} />
          <Stack.Screen name="DetailQuestion" component={DetailQuestion} />
          <Stack.Screen
            name="DetailAmazingSpace"
            component={DetailAmazingSpace}
          />
          <Stack.Screen name="ListAmazing" component={ListAmazing} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
