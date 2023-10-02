import React from "react";
import navigationStrings from "@navigation/navigationStrings";

import { CreatePost, Home, Search } from "@features";
import TabRoutes from "./TabRoutes";

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={navigationStrings.TAB_ROUTES}
                component={TabRoutes}
                options={{ headerShown: false }}
            />
            
        </>
    );
}