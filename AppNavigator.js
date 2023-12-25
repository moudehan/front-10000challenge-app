import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilPage from "./components/ProfilPage";
import BadgePage from "./components/BadgePage";
import ActualitePage from "./components/ActualitePage";
import WelcomePage from "./components/Welcome";
import LoginPage from "./components/login";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="/"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        component={WelcomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profil"
        component={ProfilPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Badges"
        component={BadgePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Actualites"
        component={ActualitePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
