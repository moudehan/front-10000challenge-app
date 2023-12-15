import React, { useState, useEffect } from "react";
import ProfilPage from "./components/ProfilPage";

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
      <ProfilPage></ProfilPage>
    </>
  );
}
