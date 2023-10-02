// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainStack from "./NavigationContainer/MainStack";
import AuthStack from "./NavigationContainer/AuthStack";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const userData = useSelector((state) => state.auth.userData);

  console.log(" userData =>  ", userData);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!!userData?.isLogin ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
