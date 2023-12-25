import React, { useEffect, useState } from "react";
import ProfilPage from "./components/ProfilPage";
import BadgePage from "./components/BadgePage";
import LoadingPage from "./components/LoadinPage";
import LoginPage from "./components/login";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      )}
      {/* <WelcomePage /> */}
      {/* <AproposPage></AproposPage> */}
      {/* <ActualitePage></ActualitePage> */}
      {/* <ProfilPage></ProfilPage> */}
    </>
  );
}
