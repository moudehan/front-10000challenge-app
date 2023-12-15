import React, { useState, useEffect } from "react";
import ProfilPage from "./components/ProfilPage";
import LoadingPage from "./components/LoadinPage";
import LoginPage from "./components/login";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <LoadingPage /> : <LoginPage />}
      {/* <WelcomePage /> */}
      {/* <AproposPage></AproposPage> */}
      {/* <ActualitePage></ActualitePage> */}
      <ProfilPage></ProfilPage>
    </>
  );
}
