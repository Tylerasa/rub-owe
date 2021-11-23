import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function Wrapper() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tabs"
          component={Tabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


