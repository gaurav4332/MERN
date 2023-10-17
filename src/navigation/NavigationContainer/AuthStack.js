import React from "react";
import navigationStrings from "@navigation/navigationStrings";

import { InitialScreen, Login, Signup, Otp, Webview } from "@features";

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.INITIAL_SCREEN}
        component={InitialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.OTP}
        component={Otp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.WEB_VIEW}
        component={Webview}
        options={{ headerShown: false }}
      />
    </>
  );
}
