import React from "react";
import navigationStrings from "@navigation/navigationStrings";

import { InitialScreen,Login, Signup } from "@features";

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
        </>
    );
}