import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BalanceInputScreen from "./screens/BalanceInputScreen";
import BillPaymentsScreen from "./screens/BillPaymentsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BalanceInput">
        <Stack.Screen
          name="BalanceInput"
          component={BalanceInputScreen}
          options={{ title: "Enter Balance" }}
        />
        <Stack.Screen
          name="BillPayments"
          component={BillPaymentsScreen}
          options={{ title: "Bill Payments" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
